import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const BASE_URL = 'https://randomuser.me/api?inc=name,location,picture&results=25';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

const http = {
  getUsers: (endpoint: string, config: AxiosRequestConfig = {}): Promise<AxiosResponse<IGetUsersResponse>> => {
    return instance.get(`${BASE_URL}&${endpoint}`, config);
  },
};

export default http;
