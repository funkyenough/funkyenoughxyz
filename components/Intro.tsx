import React, { useEffect, useState } from "react";

function Intro() {
  const [data, setData] = useState({
    titles: [],
    dateAdded: [],
    // creators: [],
  });
  useEffect(() => {
    fetch("/api/zotero")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <div className="text-lg font-bold">Funkyenough's Website</div>
      <div>Flaneur, Generalist</div>
      <div>Philosopher</div>
      <div className="text-lg font-bold">Skills</div>
      <div>
        <h2>Titles:</h2>
        <ul>
          {data.titles.map((title) => (
            <li key={title}>{title}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Date Added:</h2>
        <ul>
          {data.dateAdded.map((date) => (
            <li key={date}>{date}</li>
          ))}
        </ul>
        <h2>Creators:</h2>
        {/* <ul>
          {data.creators.map((creatorArray, index) =>
            creatorArray.map((creator) => (
              <li key={`${creator.firstName}-${creator.lastName}-${index}`}>
                {creator.firstName} {creator.lastName}
              </li>
            ))
          )}
        </ul> */}
      </div>
    </div>
  );
}

export default Intro;
