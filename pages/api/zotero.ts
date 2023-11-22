import { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

interface Creator {
  firstName: string;
  lastName: string;
}

interface Item {
  filter: any;
  meta: {
    creatorSummary: string;
  };
  data: {
    itemType: string;
    title: string;
    dateAdded: string;
    creators: Creator[];
    url: string;
  };
}

export default async function fetchZoteroItems(
  req: NextApiRequest,
  res: NextApiResponse
) {
  require("dotenv").config({ path: "./.env.local" });

  const apiKey = process.env.Zotero_API_Key || "";
  const userId = process.env.Zotero_User_ID || "";
  console.log(apiKey, userId);

  const myHeaders = new Headers({
    "Zotero-API-Key": apiKey,
  });
  console.log(myHeaders);

  const url = `https://api.zotero.org/users/${userId}/items?format=json&sort=dateAdded&direction=desc&itemType=-attachment || annotation&limit=5`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    });

    const result = (await response.json()) as Item;

    const filteredResult = result.filter(
      (item: Item) =>
        item.data.itemType !== "attachment" &&
        item.data.itemType !== "annotation"
    );

    const items = filteredResult.map(
      (item: {
        data: {
          creators: string | any[];
          title: any;
          dateAdded: any;
          url: any;
        };
        meta: { creatorSummary: any };
      }) => {
        let firstName = "";
        let lastName = "";

        if (item.data.creators.length > 0) {
          firstName = item.data.creators[0].firstName;
          lastName = item.data.creators[0].lastName;
        }

        if (item.data.creators.length > 1) {
          // If there are more than one creators, append "et al." to the last name
          lastName += " et al.";
        }

        return {
          creatorSummary: item.meta.creatorSummary,
          title: item.data.title,
          dateAdded: item.data.dateAdded,
          firstName,
          lastName,
          url: item.data.url,
        };
      }
    );

    console.log(items);

    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
}
