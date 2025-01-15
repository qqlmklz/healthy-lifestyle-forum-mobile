import store from '@/app/store';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Provider } from 'react-redux';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Montserrat: require('../assets/fonts/Montserrat-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    } else if (error) {
      console.error('Error loading font: ', error);
    }
  }, [loaded, error]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Stack>
        {/* Home screen */}
        <Stack.Screen name="index" options={{ headerShown: false }} />
        {/* Employee screen */}
        <Stack.Screen name="employee/[id]" options={{ headerShown: false }} />
        {/* favorites screen */}
        <Stack.Screen name="favorites/index" options={{ headerShown: false }} />
        <Stack.Screen name="favorites/[id]" options={{ headerShown: false }} />
        {/* Not Found */}
        <Stack.Screen name="+not-found" />
      </Stack>
    </Provider>
  );
}
