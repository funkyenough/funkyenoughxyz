import React, { useEffect, useState } from "react";

function Intro() {
  const [data, setData] = useState([]);

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
        <h2>Items:</h2>
        <ul>
          {data.map((item) => (
            <li key={item.title}>
              <h3>Title: {item.title}</h3>
              <p>Creator Summary: {item.creatorSummary}</p>
              <p>Date Added: {item.dateAdded}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Intro;
