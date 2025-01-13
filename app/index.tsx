import { ArticleList, BurgerMenu, ButtonList, Footer, Header, StuffList } from '@/components';
import React from 'react';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from './store';

export default function HomePage() {
  const menuOpen = useSelector((state: RootState) => state.burgerMenu);

  return (
    <ScrollView className="flex-1 bg-white" scrollEnabled={!menuOpen}>
      <BurgerMenu />
      {/* Header */}
      <Header />
      {/* Sections */}
      <ButtonList />
      {/* Stuff */}
      <StuffList />
      {/* Articles */}
      <ArticleList />
      {/* Footer */}
      <Footer />
    </ScrollView>
  );
}
