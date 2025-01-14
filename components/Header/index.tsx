import { openMenu } from '@/shared/slices/burgerMenuSlice';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Wrapper } from '../Wrapper';

type HeaderProps = {
  size: 'sm' | 'xl';
  path?: string;
};

export const Header: FC<HeaderProps> = ({ size, path }) => (
  <Wrapper>
    {size === 'xl' && <XLHeader />}
    {size === 'sm' && <SMHeader path={path} />}
  </Wrapper>
);

const XLHeader = () => {
  const dispatch = useDispatch();

  return (
    <View style={{ marginBottom: 35 }}>
      <Image
        style={{ position: 'relative', top: 45, left: 205 }}
        source={require('@/assets/images/logo.png')}
      />
      <Text style={{ fontSize: 24 }}>healthy lifestyle</Text>
      <Text style={{ fontSize: 16, marginLeft: 56 }}>
        {'путеводитель по здоровью,\nпитанию и спорту'}
      </Text>
      <View
        style={{
          width: 320,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 6,
        }}
      >
        <Text style={{ opacity: 0 }}>Breadcrumbs</Text>
        {/* Кнопка бургер */}
        <TouchableOpacity onPress={() => dispatch(openMenu())}>
          <Ionicons name="menu" size={32} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SMHeader = ({ path }: { path?: string }) => {
  const dispatch = useDispatch();

  return (
    <View>
      <Text className="text-center mt-6 text-[24px]">healthy lifestyle</Text>
      <View
        style={{
          width: 320,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 6,
        }}
      >
        {path && (
          <View className="flex flex-row">
            <Link href={{ pathname: '/' }} asChild>
              <Text className="text-[#04A8FF] text-[12px]">Главная</Text>
            </Link>
            <Text className="text-[12px]"> / {path}</Text>
          </View>
        )}
        {/* Кнопка бургер */}
        <TouchableOpacity onPress={() => dispatch(openMenu())}>
          <Ionicons name="menu" size={32} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
