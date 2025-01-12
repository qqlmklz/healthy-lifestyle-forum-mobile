import { createSlice } from '@reduxjs/toolkit';

const favoriteArticlesSlice = createSlice({
  name: 'favoriteArticles',
  initialState: {
    favoriteArticles: [],
  },
  reducers: {
    handleSaveArticles(state, { payload }) {
      state.favoriteArticles = payload.selectedArticle;
    },
    handleUnsaveArticles(state, { payload }) {
      state.favoriteArticles = payload.selectedArticle;
    },
  },
});

export const { handleSaveArticles, handleUnsaveArticles } = favoriteArticlesSlice.actions;
export default favoriteArticlesSlice.reducer;
