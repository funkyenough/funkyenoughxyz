require("dotenv").config({ path: "./.env.local" });
let ZoteroAPIKey = process.env.Zotero_API_Key;

if (ZoteroAPIKey) {
  let myHeaders = new Headers();
  myHeaders.append("Zotero-API-Key", ZoteroAPIKey);

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("https://api.zotero.org/users/6104870/collections", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
} else {
  console.log("ZoteroAPIKey is undefined or missing.");
}
