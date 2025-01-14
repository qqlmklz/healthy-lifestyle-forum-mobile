import { FC } from 'react';
import { Image, Text, View } from 'react-native';

type ArticleProps = {
  title: string;
  subtitle: string;
  photo: {
    source: string;
    width: number;
    height: number;
  };
};

export const Article: FC<ArticleProps> = ({ title, subtitle, photo }) => {
  // Определяем источник изображения
  const imageSource =
    photo.source.startsWith('http') || photo.source.startsWith('/')
      ? { uri: photo.source }
      : require('@/assets/images/example.png');

  return (
    <View className="px-6 py-7 border-[1px] border-[#000000] rounded-[30px] mb-10">
      <Text className="font-bold text-[24px]">{title}</Text>
      <Text className="font-bold text-[13px] text-[#6F6F6F]">{subtitle}</Text>
      <Image
        source={imageSource}
        style={{ width: photo.width, height: photo.height }}
        className="flex self-end mt-6"
      />
    </View>
  );
};
