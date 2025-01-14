import { FC } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

type StaffButtonProps = {
  handlePress: () => void;
  name: string;
  photo: string;
};

export const StaffButton: FC<StaffButtonProps> = ({ handlePress, name, photo }) => {
  // Определяем источник изображения
  const imageSource =
    photo.startsWith('http') || photo.startsWith('/')
      ? { uri: photo }
      : require('@/assets/images/example.png');

  return (
    <TouchableOpacity className="mb-6" onPress={handlePress}>
      <Image source={imageSource} style={{ width: 153, height: 195 }} />
      <Text className="text-center text-base">{name}</Text>
    </TouchableOpacity>
  );
};
