import { Footer, Header } from '@/components';
import { Wrapper } from '@/components/Wrapper';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { Link } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { RootState } from './store';

export default function NutritionPage() {
  const menuOpen = useAppSelector((state: RootState) => state.burgerMenu);

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
      <Header size="sm" path="Питание" />
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
        <View className="flex flex-row justify-center items-center mb-6">
          <Image source={require('@/assets/images/nutrition/image1.png')} />
          <Image source={require('@/assets/images/nutrition/image2.png')} />
        </View>
        {/* List */}
        <View className="mb-14">
          <Text className="text-[16px] font-bold mb-6">Здоровое питание</Text>
          <Text className="text-[16px] font-bold mb-6">Витамины</Text>
          <Text className="text-[16px] font-bold mb-6">Рецепты</Text>
          <Text className="text-[16px] font-bold mb-6">Диеты</Text>
          <Text className="text-[16px] font-bold mb-6">Сушка тела</Text>
          <Text className="text-[16px] font-bold">Мифы о питании</Text>
        </View>
        {/* Action */}
        <TouchableOpacity className="bg-[#04A8FF] rounded-[30px] mb-12">
          <Text className="text-[#FFFFFF] text-center text-[12px] font-bold uppercase py-4 px-2">
            Записаться на консультацию с диетологом
          </Text>
        </TouchableOpacity>
        {/* Line */}
        <View className="h-1 bg-black mb-14"></View>
        {/* List */}
        <View className="mb-10">
          <Text className="text-[16px] font-bold mb-6">Рассчитать дневную норму каллорий</Text>
        </View>
      </Wrapper>
      {/* Footer */}
      <Footer />
    </ScrollView>
  );
}
