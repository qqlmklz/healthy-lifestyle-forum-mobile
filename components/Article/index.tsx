import { FC } from 'react';
import { Image, Text, View } from 'react-native';

type ArticleProps = {
  title: string;
  subtitle: string;
  id: number;
};

const images = [
  require('@/assets/images/articles/article1.png'),
  require('@/assets/images/articles/article2.png'),
];

export const Article: FC<ArticleProps> = ({ title, subtitle, id = 1 }) => {
  return (
    <View className="px-6 py-7 border-[1px] border-[#000000] rounded-[30px] mb-10">
      <Text className="font-bold text-[24px]">{title}</Text>
      <Text className="font-bold text-[13px] text-[#6F6F6F]">{subtitle}</Text>
      <Image source={images[id - 1]} className="flex self-end mt-6" />
    </View>
  );
};
