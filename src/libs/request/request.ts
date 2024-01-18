import axios, { Method } from 'axios';

type RequestParams = {
  url: string;
  data?: { [key: string]: string } | null;
  method: Method;
  token?: string;
  error?: {
    code: string;
    message: string;
  };
};

const request = async <T>({
  url,
  data = null,
  method,
  token,
}: RequestParams) => {
  try {
    if (token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    const { data: responseData, status } = await axios({
      url,
      data,
      method,
    });
    return { data: responseData as T, status };
  } catch (e: any) {
    throw new Error(`${e.code}: ${e.message}`);
  }
};

export default request;
