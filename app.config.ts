import { ExpoConfig, ConfigContext } from '@expo/config';
import * as dotenv from 'dotenv';

dotenv.config();

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  slug: 'healthy-lifestyle',
  name: 'Healthy Lifestyle',
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.qqlmklz.healthy-lifestyle',
  },
  android: {
    package: 'com.qqlmklz.healthy-lifestyle',
    versionCode: 1,
    permissions: ['CAMERA', 'WRITE_EXTERNAL_STORAGE', 'READ_EXTERNAL_STORAGE'],
    adaptiveIcon: {
      foregroundImage: './assets/icons/logo.jpg',
      backgroundColor: '#ffffff',
    },
    config: {
      googleMaps: {
        apiKey: process.env.GOOGLE_CLOUD_API_KEY,
      },
    },
  },
  extra: {
    eas: {
      projectId: 'd9ee2e61-321b-42b8-9ef2-c65d0357c76a',
    },
  },
});
