import { useState, useEffect } from "react";

const useFetch = (url = "", body = {}) => {
  let [Data, setData] = useState(null);
  let [Error, setError] = useState(null);
  let [isLoading, setIsLoading] = useState(true); // is in loading ...
  let [startFetch, setStartFetch] = useState(false);

  useEffect(() => {
    startFetch !== false && fetchData();
  }, [startFetch]);

  function fetchData() {
    fetch(url, body)
      .then((response) => response.json())
      .then((response) => {
        setError(null);
        setData(response);
      })
      .catch((error) => {
        setError(error);
        setData(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
    setStartFetch(false);
  }
  function startSend() {
    setStartFetch(true);
  }

  return { Data, Error, isLoading, startSend };
};

export default useFetch;
