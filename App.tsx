import { COLORS } from '@utils';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from './src/navigations/AppNavigator';
const App = () => {
  return (
    <SafeAreaProvider style={{backgroundColor: COLORS.background}}>
      <AppNavigator />
    </SafeAreaProvider>
  );
};

export default App;
