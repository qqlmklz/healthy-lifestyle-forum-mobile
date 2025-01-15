import { Link } from 'expo-router';
import { FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export const ButtonList: FC = () => {
  return (
    <View className="flex justify-center items-center mb-[30px]">
      <Link href={{ pathname: 'sport' }} asChild>
        <TouchableOpacity
          className="w-[180px] flex justify-center items-center py-[20px] mb-[30px] rounded-[30px]"
          style={{ backgroundColor: '#F47C7C' }}
        >
          <Text className="text-2xl font-medium">Спорт</Text>
        </TouchableOpacity>
      </Link>
      <Link href={{ pathname: '' }} asChild>
        <TouchableOpacity
          className="w-[180px] flex justify-center items-center py-[20px] mb-[30px] rounded-[30px]"
          style={{ backgroundColor: '#A1DE93' }}
        >
          <Text className="text-2xl font-medium">Питание</Text>
        </TouchableOpacity>
      </Link>
      <Link href={{ pathname: '' }} asChild>
        <TouchableOpacity
          className="w-[180px] flex justify-center items-center py-[20px] mb-[30px] rounded-[30px]"
          style={{ backgroundColor: '#70A1D7' }}
        >
          <Text className="text-2xl font-medium">Здоровье</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};
