import { useState, useEffect } from "react";
import {API} from "../api/API";

export const useAxiosGet = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const response = await API.get(url);
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);
  return { data, error, loaded };
};

