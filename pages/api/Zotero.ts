import { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

export default async function fetchZoteroItems(
  req: NextApiRequest,
  res: NextApiResponse
) {
  require("dotenv").config({ path: "./.env.local" });

  const apiKey = process.env.Zotero_API_Key || "";
  const userId = process.env.zoteroUserId || "";
  console.log(apiKey, userId);

  const myHeaders = new Headers({
    "Zotero-API-Key": apiKey,
  });
  console.log(myHeaders);

  const url = `https://api.zotero.org/users/${userId}/items`;

  // try {
  const response = await fetch(url, {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  });

  const result = await response.json();
  const titles = result.map((item) => item.data.title);
  const dateAdded = result.map((item) => item.data.dateAdded);

  res.status(200).json({ titles, dateAdded });
  // } catch (error) {
  //   res
  //     .status(500)
  //     .json({ error: "Something went wrong", message: error.message });
  // }
}
