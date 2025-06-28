// src/hooks/useFetchJson.js
import { useEffect, useState } from "react";

const useFetchJson = (url) => {
  const [data, setData] = useState(null); // stores the fetched data
  const [loading, setLoading] = useState(true); // optional loading state
  const [error, setError] = useState(null); // optional error state

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
};

export default useFetchJson;
