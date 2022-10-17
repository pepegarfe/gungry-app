import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.gungry.app',
  appName: 'Gungry',
  webDir: 'www.gungry.com',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
      backgroundColor: '#ffffffff',
      androidSplashResourceName: 'splash',
      androidScaleType: 'CENTER_CROP',
      showSpinner: false,
      androidSpinnerStyle: 'large',
      iosSpinnerStyle: 'small',
      spinnerColor: '#999999',
      splashFullScreen: true,
      splashImmersive: true,
    },
    GoogleAuth: {
      scopes: ['profile', 'email'],
      iosClientId: '416482418896-d14d1oqbc0b6i8na5tnvlgackfevlnql.apps.googleusercontent.com',
      androidClientId: '416482418896-d14d1oqbc0b6i8na5tnvlgackfevlnql.apps.googleusercontent.com',
      serverClientId: '416482418896-d14d1oqbc0b6i8na5tnvlgackfevlnql.apps.googleusercontent.com',
      forceCodeForRefreshToken: true
    }
  }
};

export default config;
