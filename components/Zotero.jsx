function Zotero() {
  return <div>Zotero</div>;
}

export default Zotero;

// https://api.zotero.org/groups/4895482/items/top
// Here I've tried to access a public library that doesn't require an API key.
// All the data is already embedded in the HTML, so we just need to know how to flesh out
// the part that we need.

// Now we need to figure out OAuth because my library is private.

fetch(`https://api.zotero.org/users/6104870/collections`, {
  method: "GET",
  headers: {
    "Zotero-API-Key": process.env.ZOTERO_APIKEY,
  },
}).then((res) => console.log(res));
