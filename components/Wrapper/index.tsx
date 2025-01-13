import { FC, PropsWithChildren } from 'react';
import { View } from 'react-native';

export const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return <View className="px-[45px]">{children}</View>;
};
