import { Footer, Header } from '@/components';
import { Wrapper } from '@/components/Wrapper';
import { API } from '@/shared/api';
import { Link, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

export default function ArticlePage() {
  const { id } = useLocalSearchParams();
  const [article, setArticle] = useState<Article>({
    id: '',
    title: '',
    subtitle: '',
    content: [],
    tags: '',
    photo: {
      source: '',
      width: 0,
      height: 0,
    },
  });

  const fetchArticle = async () => {
    try {
      const articleId = Array.isArray(id) ? id[0] : id;
      if (!articleId) throw new Error('Article ID is not available');

      const response = await API.appBlock.getArticle(articleId);
      setArticle(response.data);
    } catch (error) {
      console.error('Error fetching employee:', error);
    }
  };

  const imageSource =
    article.photo.source.startsWith('http') || article.photo.source.startsWith('/')
      ? { uri: article.photo.source }
      : require('@/assets/images/example.png');

  useEffect(() => {
    fetchArticle();
  }, []);

  return (
    <ScrollView>
      <Header size="sm" path="Специалисты" />
      <Wrapper>
        {/* BackButton */}
        <Link href={{ pathname: './' }} asChild>
          <Text className="mb-7">
            <Image
              source={require('@/assets/icons/backbutton.png')}
              style={{ width: 27, height: 27 }}
            />
          </Text>
        </Link>
        {/* Content */}
        <View className="flex justify-center items-center mb-6">
          <Image
            source={imageSource}
            style={{ width: article.photo.width, height: article.photo.height }}
          />
          <Text className="text-[16px] font-bold text-center">{article.title}</Text>
        </View>
        {article.content.map((section, index) => (
          <View key={index} className="mb-10">
            <Text className="font-bold text-[16px] text-center mb-2">{section.subtitle}</Text>
            <Text className="text-[12px] text-center">{section.description}</Text>
          </View>
        ))}
        {article.tags && (
          <View className="mb-10">
            <Text className="border-t-[1px] border-[#000] pt-4">Теги: {article.tags}</Text>
          </View>
        )}
      </Wrapper>
      <Footer />
    </ScrollView>
  );
}
