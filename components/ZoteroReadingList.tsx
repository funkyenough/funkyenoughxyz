import React, { useEffect, useState } from "react";
import { formatDate } from "../utils/FormatDate";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface Item {
  title: string;
  dateAdded: string;
  creatorSummary: string;
  firstName: string;
  lastName: string;
  url: string;
}

export default function ZoteroReadingList() {
  const [data, setData] = useState<Item[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/zotero");
      let data: Item[] = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="text-lg font-bold my-8">What I am reading lately</div>
      <ul className="space-y-2">
        {data.length === 0 ? (
          <li>
            <div className="flex flex-col border-2">
              <div className="flex flex-row justify-between">
                <div>
                  <Skeleton height={20} width={200} />
                </div>
                <div>
                  <Skeleton height={20} width={200} />
                </div>
              </div>
              <a href="#" className="text-left">
                <Skeleton height={20} width={200} />
              </a>
            </div>
          </li>
        ) : (
          data.map((item) => (
            <li key={item.title}>
              <div className="flex flex-col border-2">
                <div className="flex flex-row justify-between">
                  <div>
                    {item.firstName} {item.lastName}
                  </div>
                  <div>
                    <div>{formatDate(item.dateAdded)}</div>
                  </div>
                </div>
                <a href={item.url} className="text-left">
                  {item.title || <Skeleton />}
                </a>
              </div>

              <br />
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
