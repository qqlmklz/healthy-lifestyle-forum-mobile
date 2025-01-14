import { Link } from 'expo-router';
import { FC } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

type StaffButtonProps = {
  employeeId: string;
  name: string;
  photo: string;
};

export const StaffButton: FC<StaffButtonProps> = ({ employeeId, name, photo }) => {
  // Определяем источник изображения
  const imageSource =
    photo.startsWith('http') || photo.startsWith('/')
      ? { uri: photo }
      : require('@/assets/images/example.png');

  return (
    <Link
      href={{
        pathname: '/employee/[id]',
        params: { id: employeeId },
      }}
      asChild
    >
      <TouchableOpacity className="mb-6">
        <Image source={imageSource} style={{ width: 153, height: 195 }} />
        <Text className="text-center text-base">{name}</Text>
      </TouchableOpacity>
    </Link>
  );
};
