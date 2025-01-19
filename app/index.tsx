import { ArticleList, ButtonList, Footer, Header, StaffList } from '@/components';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import React from 'react';
import { ScrollView } from 'react-native';
import { RootState } from './store';

export default function HomePage() {
  const menuOpen = useAppSelector((state: RootState) => state.burgerMenu);

  return (
    <ScrollView className="flex-1 bg-white" scrollEnabled={!menuOpen}>
      {/* Header */}
      <Header size="xl" />
      {/* Sections */}
      <ButtonList />
      {/* Staff */}
      <StaffList />
      {/* Articles */}
      <ArticleList />
      {/* Footer */}
      <Footer />
    </ScrollView>
  );
}
