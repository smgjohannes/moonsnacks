// useDataFetching.js
import { useState, useEffect } from 'react';

const useDataFetching = (dataProvider) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newData = await dataProvider();
        setData(newData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [dataProvider]);

  return data;
};

export default useDataFetching;
