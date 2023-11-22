import React, { useEffect, useState } from "react";

interface Item {
  title: string;
  dateAdded: string;
  creatorSummary: string;
  firstName: string;
  lastName: string;
  url: string;
}

function SkeletonItem() {
  return (
    <li className="animate-pulse">
      <div className="flex flex-row justify-between">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/4"></div>
      </div>
      <div className="h-4 bg-gray-300 rounded w-full mt-2"></div>
    </li>
  );
}

function ZoteroReadingList() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Item[]>([]);

  if (isLoading) {
    return (
      <div>
        <div className="text-lg font-bold">What I am reading lately</div>
        <ul className="space-y-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <SkeletonItem key={index} />
          ))}
        </ul>
      </div>
    );
  }

  useEffect(() => {
    fetch("/api/zotero")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // Function to convert ISO date to custom format (YYYY/MM/DD)
  const formatDate = (isoDate: string | number | Date) => {
    const dateObj = new Date(isoDate);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, "0");
    const day = String(dateObj.getDate()).padStart(2, "0");
    return `${year}/${month}/${day}`;
  };

  return (
    <div>
      <div className="text-lg font-bold">What I am reading lately</div>
      <ul className="space-y-2">
        {data.map((item) => (
          <li key={item.title}>
            <div className="flex flex-col">
              <div className="flex flex-row justify-between">
                <div>
                  {item.firstName} {item.lastName}
                </div>
                <div>
                  <div>{formatDate(item.dateAdded)}</div>
                </div>
              </div>
              <a href={item.url}>{item.title}</a>
            </div>

            <br />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ZoteroReadingList;
