import { API } from '@/shared/api';
import { FC, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Article } from '../Article';
import { Title } from '../Title';
import { Wrapper } from '../Wrapper';

export const ArticleList: FC = () => {
  const [articles, setArticles] = useState<Articles>([]); // Состояние для хранения данных

  const fetchPosts = async () => {
    try {
      const response = await API.appBlock.getAllArticles();
      setArticles(response.data); // Обновляем состояние с полученными данными
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    articles && (
      <View>
        <Wrapper>
          <Title>Также советуем посмотреть</Title>
          {articles.map((article) => (
            <Article
              key={article.id}
              title={article.title}
              subtitle={article.subtitle}
              photo={article.photo}
            />
          ))}
        </Wrapper>
      </View>
    )
  );
};
