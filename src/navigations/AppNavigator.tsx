import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './HomeNavigator';
import PresentationNavigator from './PresentationNavigator';

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
            <PresentationNavigator />
            {/* <HomeNavigator /> */}
        </NavigationContainer>
    )
};