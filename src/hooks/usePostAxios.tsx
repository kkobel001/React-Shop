import { useState } from 'react';
import axios from 'axios';

export const usePostAxios = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const postData = async params => {
    setLoading(true);
    try {
      const result = await axios.request(params);
      setResponse(result.data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return [postData, response, error, loading];
};
