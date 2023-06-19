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
        <div>Web3 Frontend</div>
        <div>Blockchain</div>
        <div></div>
      </div>
      <div className="text-lg font-bold">What I am reading recently</div>
      <ul>
        {data.map((item) => (
          <li key={item.title}>
            <div className="flex flex-col">
              <div className="flex flex-row space-x-5">
                <div>{item.dateAdded}</div>
                <div>{item.creatorSummary}</div>
              </div>
              <div>{item.title}</div>
            </div>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Intro;
