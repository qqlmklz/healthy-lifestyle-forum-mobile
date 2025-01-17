import { formatDate } from '@/scripts/helpers';
import { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

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
  const imageSource =
    photo.source.startsWith('http') || photo.source.startsWith('/')
      ? { uri: photo.source }
      : require('@/assets/images/example.png');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Image
        testID="article-image"
        source={imageSource}
        style={{
          width: photo.width,
          height: photo.height,
          display: 'flex',
          alignSelf: 'flex-end',
          marginTop: 24,
        }}
      />
      <Text className="text-[10px] mt-2 text-right">{formatDate('2025-01-01T14:30:00Z')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 28,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 30,
    marginBottom: 40,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  subtitle: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#6F6F6F',
  },
});
