import { FC, PropsWithChildren } from 'react';
import { Text } from 'react-native';

export const Title: FC<PropsWithChildren> = ({ children }) => {
  return <Text className="text-2xl font-bold text-center mb-4">{children}</Text>;
};
