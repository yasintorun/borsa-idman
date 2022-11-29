import { store } from '@store';
import { COLORS } from '@utils';
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as StoreProvider } from 'react-redux';
import Launch from './Launch';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const App = () => {
  return (
    <StoreProvider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <SafeAreaProvider style={{ flex: 1, backgroundColor: COLORS.background }}>
          <StatusBar backgroundColor={COLORS.background} />
          <Launch />
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </StoreProvider>
  );
};

export default App;
