import { Footer, Header } from '@/components';
import { Wrapper } from '@/components/Wrapper';
import { Link } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from './store';

export default function HealthPage() {
  const menuOpen = useSelector((state: RootState) => state.burgerMenu);

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
      <Header size="sm" path="Здоровье" />
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
        {/* Image */}
        <View className="flex justify-center items-center mb-6">
          <Image source={require('@/assets/images/health/image1.png')} />
        </View>
        {/* List */}
        <View className="mb-[170px] relative">
          <Image
            source={require('@/assets/images/health/image2.png')}
            className="absolute top-5 right-12"
          />
          <Image
            source={require('@/assets/images/health/image3.png')}
            className="absolute top-20 right-12"
          />
          <Text className="text-[16px] font-bold mb-6">Пройти обследование здоровья</Text>
          <Text className="text-[16px] font-bold mb-6">Центры здоровья</Text>
          <Text className="text-[16px] font-bold mb-6">Бросить курить</Text>
          <Text className="text-[16px] font-bold mb-6">Витамины</Text>
          <Text className="text-[16px] font-bold">Статьи</Text>
        </View>
      </Wrapper>
      {/* Footer */}
      <Footer />
    </ScrollView>
  );
}
