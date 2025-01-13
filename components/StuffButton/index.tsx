import { FC } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

type StuffButtonProps = {
  handlePress: () => void;
  id: number;
};

const images = [
  require('@/assets/images/stuff/image1.png'),
  require('@/assets/images/stuff/image2.png'),
  require('@/assets/images/stuff/image3.png'),
];

export const StuffButton: FC<StuffButtonProps> = ({ handlePress, id = 1 }) => {
  return (
    <TouchableOpacity className="mb-6" onPress={handlePress}>
      <Image source={images[id - 1]} />
      <Text className="text-center text-base">Тренер</Text>
    </TouchableOpacity>
  );
};
