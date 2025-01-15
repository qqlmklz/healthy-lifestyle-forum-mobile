import axios from 'axios';

export const ApiInstance = axios.create({
  baseURL: 'http://192.168.1.197:3000/',
});

const appBlock = {
  // Articles
  getAllArticles: () => ApiInstance.get(`/articles/`),
  // Staff
  getStaff: () => ApiInstance.get(`/staff/`),
  getEmployee: (id: string) => ApiInstance.get(`/staff/${id}`),
  // Favorites
  getAllFavorites: () => ApiInstance.get(`/favorites`),
  getArticle: (id: string) => ApiInstance.get(`/favorites/${id}`),
};

export const API = {
  appBlock,
};
