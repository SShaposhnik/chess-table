/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';

import { StorageKeys } from 'constant';

const BASE_URL = process.env.NODE_ENV === 'production'
  ? 'https://app.bele.ru'
  : 'http://localhost:80';

axios.defaults.baseURL = BASE_URL;
// axios.interceptors.request.use(async (config) => {
//   const token = localStorage.getItem(StorageKeys.AUTH);
//   const { headers } = config;

//   return config;
// }, (error) => {
//   console.error('axios.interceptors.request', { error });
//   return Promise.reject(error);
// });

export default class {
  static BASE_URL = BASE_URL;

  static async get(url: string): Promise<any> {
    const { data } = await axios.get(url);

    return data;
  }

  static async post(url: string, body?: any): Promise<any> {
    const { data } = await axios.post(url, { ...body });

    return data;
  }

  static async delete(url: string, body?: any): Promise<any> {
    const { data } = await axios.delete(url, { ...body });

    return data;
  }

  static async put(url: string, body?: any): Promise<any> {
    const { data } = await axios.put(
      url,
      { ...body },
    );

    return data;
  }
}
