import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { RootState } from '@store';
import React from 'react';
import { useSelector } from 'react-redux';
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
    const {done: isPresentationDone} = useSelector((state: RootState) => state.presentation)

    return (
        <NavigationContainer theme={navigatorTheme}>
            {/* <PresentationNavigator /> */}
            {/* {isPresentationDone ? (
                <AuthNavigator />
            ) : (
            )} */}
            {/* <PresentationNavigator /> */}
            <HomeNavigator />
        </NavigationContainer>
    )
};