import axios from 'axios';
import { API_URL } from 'lib/constants/API';

export default async (method, url, options = {}, config = null) => {
  const instance = axios.create({
    baseURL: API_URL,
    headers: {},
  });

  try {
    const response = await instance[method](url, options, config);

    if (response.data) {
      const { data } = response;
      return data;
    }
  } catch (err) {
    const error = await err.response;

    throw error;
  }
};
