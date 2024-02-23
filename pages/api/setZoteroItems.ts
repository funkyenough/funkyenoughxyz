import { NextApiRequest, NextApiResponse } from "next";
import fetchZoteroItems from "../../utils/fetchZoteroItems";
import { kv } from "@vercel/kv";

export default async function setZoteroItems(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const items = await fetchZoteroItems();
    kv.set("ZoteroReadingList", JSON.stringify(items));
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
}
