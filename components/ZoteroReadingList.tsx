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
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/getZoteroItems");
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
      <ul className="sm:space-y-2 space-y-12 bg-gray-800 px-4 py-2 rounded-lg">
        {(loading ? Array.from<Item>({ length: 5 }) : data).map(
          (item, index) => (
            <li
              key={!item ? index : item.title}
              className="border-b border-gray-700 last:border-b-0"
            >
              <div className="flex flex-col">
                <div className="flex flex-col justify-between my-2 md:flex-row">
                  <div className="font-bold">
                    {loading ? (
                      <Skeleton
                        width={200}
                        height={20}
                        baseColor="#CCCCCC"
                        borderRadius="0.5rem"
                      />
                    ) : (
                      item.firstName + " " + item.lastName
                    )}
                  </div>
                  <div>
                    {loading ? (
                      <Skeleton
                        width={100}
                        height={20}
                        baseColor="#CCCCCC"
                        borderRadius="0.5rem"
                      />
                    ) : (
                      formatDate(item.dateAdded)
                    )}{" "}
                  </div>
                </div>
                <a
                  href={item ? item.url : "#"}
                  className="text-left h-12 overflow-ellipsis"
                >
                  {loading ? (
                    <Skeleton
                      count={2}
                      baseColor="#CCCCCC"
                      borderRadius="0.5rem"
                    />
                  ) : (
                    item.title
                  )}
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
