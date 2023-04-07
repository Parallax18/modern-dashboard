import axios from 'axios';

const Axios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 50000,
  headers: {
    Accept: 'application/json',
    // 'Content-Type': 'application/json',
  },
});

export class HttpClient {
  static async get<T>({ url, params }: { url: string; params?: unknown }) {
    const response = await Axios.get<T>(url, { params });
    return response.data;
  }
}
