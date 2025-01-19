import { BurgerMenu } from '@/components/BurgerMenu';
import React, { FC, PropsWithChildren } from 'react';
import { View } from 'react-native';

export const LayoutWithMenu: FC<PropsWithChildren> = ({ children }) => (
  <>
    {/* Боковое меню */}
    <BurgerMenu />
    {/* Контент страницы */}
    <View className="flex-1 bg-white mt-[-850px]">{children}</View>
  </>
);
