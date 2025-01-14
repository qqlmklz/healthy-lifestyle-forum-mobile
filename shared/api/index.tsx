import axios from 'axios';

export const ApiInstance = axios.create({
  baseURL: 'http://192.168.1.197:3000/',
});

const appBlock = {
  getAllArticles: () => ApiInstance.get(`/articles/`),
  getStaff: () => ApiInstance.get(`/staff/`),
  getEmployee: (id: string) => ApiInstance.get(`/staff/${id}`),
};

export const API = {
  appBlock,
};
