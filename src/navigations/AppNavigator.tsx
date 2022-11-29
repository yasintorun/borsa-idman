import React from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './HomeNavigator';
import PresentationNavigator from './PresentationNavigator';
import { useSelector } from 'react-redux';
import { RootState } from '@store';
import AuthNavigator from './AuthNavigator';

const navigatorTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'transparent',
    },
};

export const AppNavigator = (): React.ReactElement => {
    const {done: isPresentationDone} = useSelector((state: RootState) => state.presentation)

    return (
        <NavigationContainer theme={navigatorTheme}>
            {/* {isPresentationDone ? (
                <AuthNavigator />
            ) : (
                <PresentationNavigator />
            )} */}
            {/* <PresentationNavigator /> */}
            <HomeNavigator />
        </NavigationContainer>
    )
};