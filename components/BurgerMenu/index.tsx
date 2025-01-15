import { RootState } from '@/app/store';
import { closeMenu } from '@/shared/slices/burgerMenuSlice';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export const BurgerMenu: React.FC = () => {
  const menuOpen = useSelector((state: RootState) => state.burgerMenu);
  const dispatch = useDispatch();
  const animation = useRef(new Animated.Value(0)).current;

  // Эффект для запуска анимации при изменении состояния меню
  useEffect(() => {
    Animated.timing(animation, {
      toValue: menuOpen ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [menuOpen, animation]);

  const translateY = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [-900, 0], // Меню двигается от -900px к 0
  });

  return (
    <View className="flex-1 justify-start items-start bg-white">
      <Animated.View style={[styles.menu, { transform: [{ translateY }] }]}>
        <Text className="text-[24px] text-center">healthy lifestyle</Text>
        <TouchableOpacity onPress={() => dispatch(closeMenu())} className="items-end mb-[20px]">
          <Ionicons name="close" size={50} color="#000" />
        </TouchableOpacity>
        <View className="px-[80px]">
          <Link href={{ pathname: 'favorites' }} asChild onPress={() => dispatch(closeMenu())}>
            <Text className="text-[18px] text-[#000000] my-[10px]">Избранное</Text>
          </Link>
          <Link href={{ pathname: 'sport' }} asChild onPress={() => dispatch(closeMenu())}>
            <Text className="text-[18px] text-[#000000] my-[10px]">Спорт</Text>
          </Link>
          <Link href={{ pathname: 'health' }} asChild onPress={() => dispatch(closeMenu())}>
            <Text className="text-[18px] text-[#000000] my-[10px]">Здоровье</Text>
          </Link>
          <Link href={{ pathname: 'nutrition' }} asChild onPress={() => dispatch(closeMenu())}>
            <Text className="text-[18px] text-[#000000] my-[10px]">Питание</Text>
          </Link>
          <Link href={{ pathname: 'stock' }} asChild onPress={() => dispatch(closeMenu())}>
            <Text className="text-[18px] text-[#000000] my-[10px]">Акции</Text>
          </Link>
          <Link href={{ pathname: 'about' }} asChild onPress={() => dispatch(closeMenu())}>
            <Text className="text-[18px] text-[#000000] my-[10px]">О нас</Text>
          </Link>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 415,
    height: 836,
    backgroundColor: '#04a7ff',
    padding: 30,
    zIndex: 2,
  },
});
