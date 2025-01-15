import { Footer, Header } from '@/components';
import { Wrapper } from '@/components/Wrapper';
import { Link } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from './store';

export default function SportPage() {
  const menuOpen = useSelector((state: RootState) => state.burgerMenu);

  return (
    <ScrollView className="flex-1 bg-white">
      {/* Header */}
      <Header size="sm" path="Спорт" />
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
        <View className="flex justify-center items-center mt-2 mb-6">
          <Image source={require('@/assets/images/sport/image1.png')} />
        </View>
        {/* List */}
        <View className="mb-14">
          <Text className="text-[16px] font-bold mb-6">Фитнес для похудения</Text>
          <Text className="text-[16px] font-bold mb-6">Силовые упражнения</Text>
          <Text className="text-[16px] font-bold mb-6">Скретчинг</Text>
          <Text className="text-[16px] font-bold mb-6">Йога</Text>
          <Text className="text-[16px] font-bold">Про тренажеры</Text>
        </View>
        {/* Action */}
        <TouchableOpacity className="bg-[#04A8FF] rounded-[30px] mb-12">
          <Text className="text-[#FFFFFF] text-center text-[12px] font-bold uppercase py-4 px-2">
            Записаться на онлайн-тренировку
          </Text>
        </TouchableOpacity>
        {/* Line */}
        <View className="h-1 bg-black mb-14"></View>
        {/* List */}
        <View className="mb-14">
          <Text className="text-[16px] font-bold mb-6">Калькулятор каллорий</Text>
          <Text className="text-[16px] font-bold mb-6">Дневник движения</Text>
        </View>
      </Wrapper>
      {/* Footer */}
      <Footer />
    </ScrollView>
  );
}
