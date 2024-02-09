import { NextApiRequest, NextApiResponse } from "next";
import { kv } from "@vercel/kv";

export default async function getZoteroItems(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const items = await kv.get("ZoteroReadingList");
  res.status(200).json(items);
}
