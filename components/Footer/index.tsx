import { FC } from 'react';
import { Image, Text, View } from 'react-native';
import { Wrapper } from '../Wrapper';

const images = [
  { source: require('@/assets/icons/icon1.png'), size: 30, mr: 30 },
  { source: require('@/assets/icons/icon2.png'), size: 25, mr: 0 },
  { source: require('@/assets/icons/icon3.png'), size: 30, mr: 32 },
  { source: require('@/assets/icons/icon4.png'), size: 25, mr: 0 },
];

export const Footer: FC = () => {
  return (
    <View className="bg-[#04a7ff80]">
      <Wrapper>
        <View className="flex flex-row py-6">
          <View className="w-1/2 mr-8">
            <Text className="text-base">healthy lifestyle</Text>
            <View className="w-[140px] flex flex-row flex-wrap gap-[20px] mt-[0px] ml-[-10px]">
              {images.map((icon, index) => (
                <Image
                  key={index}
                  source={icon.source}
                  style={{
                    width: icon.size,
                    height: icon.size,
                    marginRight: icon.mr,
                  }}
                />
              ))}
            </View>
          </View>
          <View className="w-[50%] flex gap-[3px]">
            <Text>Материалы для скачивания</Text>
            <Text>Полезные ресурсы</Text>
            <Text>Сотрудничество</Text>
            <Text>Обратная связь</Text>
            <Text>О нас</Text>
          </View>
        </View>
      </Wrapper>
    </View>
  );
};
