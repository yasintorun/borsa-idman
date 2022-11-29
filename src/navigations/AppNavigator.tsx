import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { RootState } from '@store';
import React from 'react';
import { useSelector } from 'react-redux';
import HomeNavigator from './HomeNavigator';

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