import { useEffect, useState } from "react";
import api from "../service/api";

const useApi = (url, method = "get", requestData = {}, config = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const request = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await api[method](url, requestData, config);
        setData(response);
        return response;
      } catch (err) {
        setError(err);
        setData(null);
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (method === "post" && !requestData) {
      return;
    }
    request();
  }, [requestData]);

  return { data, loading, error };
};

export default useApi;
