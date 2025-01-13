import { FC } from 'react';
import { View } from 'react-native';
import { StuffButton } from '../StuffButton';
import { Title } from '../Title';

export const StuffList: FC = () => {
  return (
    <View>
      <Title>Наши специалисты</Title>
      <View className="flex justify-center items-center mb-12">
        <StuffButton id={1} handlePress={() => {}} />
        <StuffButton id={2} handlePress={() => {}} />
        <StuffButton id={3} handlePress={() => {}} />
      </View>
    </View>
  );
};
