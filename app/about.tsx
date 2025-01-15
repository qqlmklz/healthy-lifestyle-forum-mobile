import { Footer, Header, Title } from '@/components';
import { Wrapper } from '@/components/Wrapper';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { Link } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text } from 'react-native';
import { RootState } from './store';

export default function AboutPage() {
  const menuOpen = useAppSelector((state: RootState) => state.burgerMenu);

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
      <Header size="sm" path="О нас" />
      <Wrapper>
        {/* Back button */}
        <Link href={{ pathname: '/' }} asChild>
          <Text className="mb-7">
            <Image
              source={require('@/assets/icons/backbutton.png')}
              style={{ width: 27, height: 27 }}
            />
          </Text>
        </Link>
        <Title>О нас</Title>
        <Text>
          Мы - команда "Healthy Lifestyle", посвященная поощрению здорового образа жизни. Мы верим,
          что здоровье - это наш самый ценный ресурс, и стремимся помочь людям достичь и
          поддерживать его. Наши ценности включают физическую активность, правильное питание,
          регулярные медицинские осмотры, психологическое благополучие и другие аспекты здорового
          образа жизни. Мы также предлагаем информацию, советы и поддержку для тех, кто стремится
          изменить свою жизнь к лучшему. Присоединяйтесь к нам и начните свой путь к здоровому и
          счастливому образу жизни!
        </Text>
        <Image source={require('@/assets/images/about/image1.png')} className="mb-10" />
      </Wrapper>
      {/* Footer */}
      <Footer />
    </ScrollView>
  );
}
