import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(
          "https://api.jsonstorage.net/v1/json/7804044b-3c10-45a7-8864-aed588a03203/38c1f8cb-9050-496a-832e-6c421a9fee47"
        );
        setData(res.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetch();
  }, []);

  return (
    <DataContext.Provider value={{ data, isLoading }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
