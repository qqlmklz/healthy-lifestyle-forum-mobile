import { openMenu } from '@/shared/slices/burgerMenuSlice';
import { Ionicons } from '@expo/vector-icons';
import { FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Wrapper } from '../Wrapper';

export const Header: FC = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <View style={{ marginBottom: 35 }}>
        <Image
          style={{ position: 'relative', top: 10, left: 205 }}
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
    </Wrapper>
  );
};
