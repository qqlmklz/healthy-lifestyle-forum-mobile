import { FC } from 'react';
import { View } from 'react-native';
import { Article } from '../Article';
import { Title } from '../Title';
import { Wrapper } from '../Wrapper';

export const ArticleList: FC = () => {
  return (
    <View>
      <Wrapper>
        <Title>Также советуем посмотреть</Title>
        <Article id={1} title="Клуб 31 мая" subtitle="Клуб никотиновой НЕзависимости" />
        <Article
          id={2}
          title="НЕзависимость"
          subtitle="Как преодолеть алкогольную или наркотическую зависимость"
        />
      </Wrapper>
    </View>
  );
};
