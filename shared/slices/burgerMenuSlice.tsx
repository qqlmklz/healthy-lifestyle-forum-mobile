import { createSlice } from '@reduxjs/toolkit';

const burgerMenuSlice = createSlice({
  name: 'burgerMenu',
  initialState: false,
  reducers: {
    openMenu: () => true, // Устанавливает состояние в true
    closeMenu: () => false, // Устанавливает состояние в false
    toggleMenu: (state) => !state, // Переключает состояние
  },
});

export const { openMenu, closeMenu, toggleMenu } = burgerMenuSlice.actions;
export default burgerMenuSlice.reducer;
