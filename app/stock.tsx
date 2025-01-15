import { Footer, Header, Title } from '@/components';
import { Wrapper } from '@/components/Wrapper';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { Link } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { RootState } from './store';

export default function StockPage() {
  const menuOpen = useAppSelector((state: RootState) => state.burgerMenu);

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
      <Header size="sm" path="Акции" />
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
        <Title>Акции</Title>
        {/* List */}
        <View className="mt-5 mb-5 bg-[#000] rounded-[30px]">
          <View className="flex flex-row justify-between px-[20px] pt-[20px] bg-[#F97B2F] rounded-[30px]">
            <Text className="w-[150px] text-[16px] font-bold mb-6">
              Скидка 90% в Черную Пятницу!
            </Text>
            <Image source={require('@/assets/images/stock/image1.png')} className="mt-[-15px]" />
          </View>
          <Text className="text-[16px] font-bold mb-6 text-[#fff] px-[20px] pt-[20px]">
            90% скидка
            <Text className="text-[16px] font-normal mb-6 text-[#fff]">
              ⠀на консультации с 24 по 30 ноября!
            </Text>
          </Text>
        </View>
        <View className="mt-5 mb-11 bg-[#000] rounded-[30px]">
          <View className="flex flex-row justify-between px-[20px] pt-[20px] bg-[#F97B2F] rounded-[30px]">
            <Text className="w-[150px] text-[16px] font-bold mb-6">
              Скидка 90% в Черную Пятницу!
            </Text>
            <Image source={require('@/assets/images/stock/image1.png')} className="mt-[-15px]" />
          </View>
          <Text className="text-[16px] font-bold mb-6 text-[#fff] px-[20px] pt-[20px]">
            90% скидка
            <Text className="text-[16px] font-normal mb-6 text-[#fff]">
              ⠀на консультации с 24 по 30 ноября!
            </Text>
          </Text>
        </View>
      </Wrapper>
      {/* Footer */}
      <Footer />
    </ScrollView>
  );
}
