import { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';

type ButtonProps = {
  handlePress: () => void;
  text: string;
  bgColor: string;
};

export const Button: FC<ButtonProps> = ({ handlePress, text, bgColor }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className="w-[180px] flex justify-center items-center py-[20px] mb-[30px] rounded-[30px]"
      style={{ backgroundColor: bgColor }}
    >
      <Text className="text-2xl font-medium">{text}</Text>
    </TouchableOpacity>
  );
};
