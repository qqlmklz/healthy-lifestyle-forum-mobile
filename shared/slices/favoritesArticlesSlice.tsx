import { createSlice } from '@reduxjs/toolkit';

const initialState: Favorites = [];

const favoritesArticlesSlice = createSlice({
  name: 'favoriteArticles',
  initialState: {
    favoritesArticles: initialState,
  },
  reducers: {
    handleSaveArticles(state, { payload }) {
      state.favoritesArticles = payload.articles;
    },
  },
});

export const { handleSaveArticles } = favoritesArticlesSlice.actions;
export default favoritesArticlesSlice.reducer;
