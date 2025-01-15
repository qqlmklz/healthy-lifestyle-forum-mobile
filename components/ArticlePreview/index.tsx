import { Link } from 'expo-router';
import { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Icons } from '../Icons';

type ArticlePreviewProps = {
  articleId: string;
  title: string;
  photo: {
    source: string;
    width: number;
    height: number;
  };
};

export const ArticlePreview: FC<ArticlePreviewProps> = ({ title, photo, articleId }) => {
  // Определяем источник изображения
  const imageSource =
    photo.source.startsWith('http') || photo.source.startsWith('/')
      ? { uri: photo.source }
      : require('@/assets/images/example.png');

  return (
    <Link
      href={{
        pathname: '/favorites/[id]',
        params: { id: articleId },
      }}
      asChild
    >
      <TouchableOpacity>
        <View className="flex flex-col justify-center items-center mb-4">
          <Image
            source={imageSource}
            style={{ width: photo.width, height: photo.height }}
            className="relative"
          />
          <TouchableOpacity>
            <Icons.Like size={25} fill="#FF0000" className="absolute bottom-[10px] left-[105px]" />
          </TouchableOpacity>
          <Text className="text-center text-[16px] font-medium">{title}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};
