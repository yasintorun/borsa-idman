import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './HomeNavigator';

const navigatorTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'transparent',
    },
};

export const AppNavigator = (): React.ReactElement => {

    return (
        <NavigationContainer theme={navigatorTheme}>
            <HomeNavigator />
        </NavigationContainer>
    )
};