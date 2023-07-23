import { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

interface Item {
  meta: {
    creatorSummary: string;
  };
  data: {
    itemType: string;
    title: string;
    dateAdded: string;
  };
}

interface ApiResponse {
  items: Item[];
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

    const result = (await response.json()) as ApiResponse;

    const filteredResult = result.filter(
      (item) =>
        item.data.itemType !== "attachment" &&
        item.data.itemType !== "annotation"
    );

    console.log(filteredResult);

    const items = filteredResult.map((item) => {
      return {
        creatorSummary: item.meta.creatorSummary,
        title: item.data.title,
        dateAdded: item.data.dateAdded,
      };
    });

    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
}
