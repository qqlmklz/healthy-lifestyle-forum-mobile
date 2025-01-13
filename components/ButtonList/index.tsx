import { FC } from 'react';
import { View } from 'react-native';
import { Button } from '../Button';

export const ButtonList: FC = () => {
  const handlePress = () => {};

  return (
    <View className="flex justify-center items-center mb-[30px]">
      <Button handlePress={() => {}} text="Спорт" bgColor="#F47C7C" />
      <Button handlePress={() => {}} text="Питание" bgColor="#A1DE93" />
      <Button handlePress={() => {}} text="Здоровье" bgColor="#70A1D7" />
    </View>
  );
};
