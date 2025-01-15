import { ArticlePreview, Footer, Header, Title } from '@/components';
import { Wrapper } from '@/components/Wrapper';
import { API } from '@/shared/api';
import { useAppDispatch } from '@/shared/hooks/useAppDispatch';
import { useAppSelector } from '@/shared/hooks/useAppSelector';
import { handleSaveArticles } from '@/shared/slices/favoritesArticlesSlice';
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { RootState } from '../store';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<Favorites>([]);
  const dispatch = useAppDispatch();
  const favoriteArticles = useAppSelector(
    (state: RootState) => state.favoritesArticles.favoritesArticles,
  );

  const fetchFavoritesArticles = async () => {
    if (favoriteArticles.length === 0) {
      try {
        const response = await API.appBlock.getAllFavorites();
        setFavorites(response.data);
        dispatch(handleSaveArticles({ articles: response.data }));
      } catch (error) {
        console.error('Error fetching employee:', error);
      }
    } else {
      return setFavorites(favoriteArticles);
    }
  };

  useEffect(() => {
    fetchFavoritesArticles();
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
          {favorites.map((item) => (
            <ArticlePreview
              key={item.id}
              articleId={item.id}
              title={item.title}
              photo={item.photo}
            />
          ))}
        </Wrapper>
        <Footer />
      </View>
    </ScrollView>
  );
}
