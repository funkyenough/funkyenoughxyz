import React, { useEffect, useState } from "react";

interface MyComponentProps {
  // Add any props your component requires
}

const MyComponent: React.FC<MyComponentProps> = () => {
  const [collectionData, setCollectionData] = useState<any[]>([]);

  useEffect(() => {
    const fetchCollectionData = async () => {
      try {
        const response = await fetch(
          "https://api.zotero.org/users/6104870/collections",
          {
            headers: {
              "Zotero-API-Key": process.env.NEXT_PUBLIC_Zotero_API_Key || "",
            },
          }
        );

        const result = await response.json();
        setCollectionData(result);
      } catch (error) {
        console.log("Error fetching collection data:", error);
      }
    };

    fetchCollectionData();
  }, []);

  return (
    <div>{/* Render your component content using the collectionData */}</div>
  );
};

export default MyComponent;
