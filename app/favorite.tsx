import { ArticlePreview, Footer, Header, Title } from '@/components';
import { Wrapper } from '@/components/Wrapper';
import { API } from '@/shared/api';
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

export default function FavoritePage() {
  const [favorite, setFavorite] = useState<FavoriteArr>([]);

  const fetchFavoriteArticles = async () => {
    try {
      const response = await API.appBlock.getAllFavorite();
      setFavorite(response.data);
    } catch (error) {
      console.error('Error fetching employee:', error);
    }
  };

  useEffect(() => {
    fetchFavoriteArticles();
  }, []);

  return (
    <ScrollView>
      <View className="flex-1 justify-between">
        <Header size="sm" path="Избранное" />
        <Wrapper>
          {/* BackButton */}
          <Link href={{ pathname: '/' }} asChild>
            <Text className="mb-7">
              <Image
                source={require('@/assets/icons/backbutton.png')}
                style={{ width: 27, height: 27 }}
              />
            </Text>
          </Link>
          {/* Content */}
          <Title>Избранное</Title>
          {favorite.map((item) => (
            <ArticlePreview key={item.id} title={item.title} photo={item.photo} />
          ))}
        </Wrapper>
        <Footer />
      </View>
    </ScrollView>
  );
}
