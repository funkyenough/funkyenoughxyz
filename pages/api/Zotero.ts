require("dotenv").config({ path: "./.env.local" });

const fetchZoteroItems = async () => {
  const apiKey = process.env.Zotero_API_Key || "";

  const myHeaders = new Headers({
    "Zotero-API-Key": apiKey,
  });

  const url = `https://api.zotero.org/users/${process.env.zoteroUserId}/items`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    });

    const result = await response.json();
    const titles = result.map((item) => item.data.title);
    const dateAdded = result.map((item) => item.data.dateAdded);
    console.log(titles, dateAdded);
  } catch (error) {
    console.log("Error:", error);
  }
};

export default fetchZoteroItems();
