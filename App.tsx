import { store } from '@store';
import { COLORS } from '@utils';
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as StoreProvider } from 'react-redux';
import Launch from './Launch';

const App = () => {
  return (
    <StoreProvider store={store}>
      <SafeAreaProvider style={{ flex: 1, backgroundColor: COLORS.background }}>
        <StatusBar backgroundColor={COLORS.background}/>
        <Launch />
      </SafeAreaProvider>
    </StoreProvider>
  );
};

export default App;
