import React, { useEffect, useState } from "react";

interface Item {
  title: string;
  dateAdded: string;
  creatorSummary: string;
}

function Intro() {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    fetch("/api/zotero")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  // Function to convert ISO date to custom format (YYYY/MM/DD)
  const formatDate = (isoDate) => {
    const dateObj = new Date(isoDate);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
  };

  return (
    <div className="flex flex-row">
      <div className="space-y-3">
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
                  <div>{formatDate(item.dateAdded)}</div>
                  <div>{item.creatorSummary}</div>
                </div>
                <div>{item.title}</div>
              </div>
              <br />
            </li>
          ))}
        </ul>
        <div className="bg-black"></div>
      </div>
    </div>
  );
}

export default Intro;
