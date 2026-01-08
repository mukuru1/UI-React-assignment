import { useState, useEffect, useCallback } from "react";
import axiosInstance from "../app/api/axios";

export const useAxios = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { immediate = true, method = "GET", body = null } = options;

  const fetchData = useCallback(async () => {
    if (!url) {
      setError("URL is required");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const config = {
        method,
        url,
      };

      if (body && (method === "POST" || method === "PUT" || method === "PATCH")) {
        config.data = body;
      }

      const response = await axiosInstance(config);

      if (response.status >= 200 && response.status < 300) {
        setData(response.data);
        return response.data;
      } else {
        throw new Error(`Error: ${response.status}`);
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || "An error occurred";
      setError(errorMessage);
      console.error("Error fetching data:", errorMessage);
      return null;
    } finally {
      setLoading(false);
    }
  }, [url, method, body]);

  useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, [immediate, fetchData]);

  const refetch = () => {
    return fetchData();
  };

  return { data, loading, error, refetch };
};

export const useFetch = (url, immediate = true) => {
  return useAxios(url, { immediate, method: "GET" });
};

export const usePost = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = async (body) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.post(url, body);
      setData(response.data);
      return { data: response.data, error: null };
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || "An error occurred";
      setError(errorMessage);
      return { data: null, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, execute };
};

export const usePut = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = async (body) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.put(url, body);
      setData(response.data);
      return { data: response.data, error: null };
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || "An error occurred";
      setError(errorMessage);
      return { data: null, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, execute };
};

export const useDelete = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const execute = async () => {
    setLoading(true);
    setError(null);

    try {
      await axiosInstance.delete(url);
      return { success: true, error: null };
    } catch (err) {
      const errorMessage = err.response?.data?.message || err.message || "An error occurred";
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, execute };
};
