import { RootState } from '@/app/store';
import { BurgerMenu } from '@/components/BurgerMenu';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import React, { FC, PropsWithChildren } from 'react';
import { View } from 'react-native';

export const LayoutWithMenu: FC<PropsWithChildren> = ({ children }) => {
  const menuOpen = useAppSelector((state: RootState) => state.burgerMenu);

  return (
    <>
      {/* Боковое меню */}
      <BurgerMenu />
      {/* Контент страницы */}
      <View className="flex-1 bg-white mt-[-850px]">{children}</View>
    </>
  );
};
