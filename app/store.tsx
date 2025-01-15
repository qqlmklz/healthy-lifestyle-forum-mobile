import burgerMenuSlice from '@/shared/slices/burgerMenuSlice';
import favoritesArticlesSlice from '@/shared/slices/favoritesArticlesSlice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    favoritesArticles: favoritesArticlesSlice,
    burgerMenu: burgerMenuSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
