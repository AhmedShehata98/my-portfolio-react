import { useState, useEffect } from "react";

const useFetch = (url = "", body = {}) => {
  let [Data, setData] = useState(null);
  let [Error, setError] = useState(null);
  let [isLoading, setIsLoading] = useState(true); // is in loading ...
  let [startFetch, setStartFetch] = useState(false);

  useEffect(() => {
    startFetch !== false && fetchData();
  }, [startFetch]);

  async function fetchData() {
    try {
      let response = await fetch(url, body),
        data = await response.json();
      //
      setData(data);
      setError(null);
    } catch (error) {
      setError(error);
      setData(null);
    } finally {
      setIsLoading(false);
    }
  }
  function startSend() {
    setStartFetch(true);
  }

  return [Data, Error, isLoading, startSend];
};

export default useFetch;
