import favoriteArticlesSlice from '@/shared/slices/favoriteArticlesSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    favoriteArticles: favoriteArticlesSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
