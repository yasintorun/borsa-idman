import { createDrawerNavigator, DrawerScreenProps } from '@react-navigation/drawer';
import { LandingScreen } from '@screens';
import * as React from 'react';
import { ROUTES } from 'src/constants';

export type DrawerNavParamList = {
  [ROUTES.LANDING]: {
    id: number;
  };
};

export type ScreenProps<T extends ROUTES> = DrawerScreenProps<DrawerNavParamList, T>

const Drawer = createDrawerNavigator<DrawerNavParamList>();

const HomeNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name={ROUTES.LANDING} component={LandingScreen} />
    </Drawer.Navigator>
  );
}

export default HomeNavigator;