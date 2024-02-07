import React, { useEffect, useState } from "react";
import { formatDate } from "../utils/FormatDate";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
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
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/zotero");
      let data: Item[] = await response.json();
      setData(data);
      setLoading(false);
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
        {(loading ? Array.from<Item>({ length: 5 }) : data).map(
          (item, index) => (
            <li key={!item ? index : item.title}>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                  <div>
                    {loading ? (
                      <Skeleton width={200} height={20} />
                    ) : (
                      item.firstName + " " + item.lastName
                    )}
                  </div>
                  <div>
                    {loading ? (
                      <Skeleton width={100} height={20} />
                    ) : (
                      formatDate(item.dateAdded)
                    )}{" "}
                  </div>
                </div>
                <a
                  href={item ? item.url : "#"}
                  className="text-left h-12 overflow-ellipsis"
                >
                  {loading ? <Skeleton count={2} /> : item.title}
                </a>
              </div>

              <br />
            </li>
          )
        )}
      </ul>
    </div>
  );
}
