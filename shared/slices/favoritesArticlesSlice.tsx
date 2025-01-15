import { createSlice } from '@reduxjs/toolkit';

const favoritesArticlesSlice = createSlice({
  name: 'favoriteArticles',
  initialState: {
    favoritesArticles: [],
  },
  reducers: {
    handleSaveArticles(state, { payload }) {
      state.favoritesArticles = payload.selectedArticle;
    },
    handleUnsaveArticles(state, { payload }) {
      state.favoritesArticles = payload.selectedArticle;
    },
  },
});

export const { handleSaveArticles, handleUnsaveArticles } = favoritesArticlesSlice.actions;
export default favoritesArticlesSlice.reducer;
