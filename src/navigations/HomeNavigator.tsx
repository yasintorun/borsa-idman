import { createDrawerNavigator, DrawerScreenProps } from '@react-navigation/drawer';
import { LandingScreen, PresentationScreen } from '@screens';
import * as React from 'react';
import { ROUTES } from '@utils';

export type DrawerNavParamList = {
  [key in ROUTES]: undefined;
};

export type ScreenProps<T extends ROUTES> = DrawerScreenProps<DrawerNavParamList, T>

const Drawer = createDrawerNavigator<DrawerNavParamList>();

const HomeNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name={ROUTES.PRESENTATION} component={PresentationScreen} />
      <Drawer.Screen name={ROUTES.LANDING} component={LandingScreen} />
    </Drawer.Navigator>
  );
}

export default HomeNavigator;