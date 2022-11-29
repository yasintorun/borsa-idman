import { IdmanDrawer, IdmanHeader } from '@components';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { LandingScreen, SelectAccountScreen } from '@screens';
import * as React from 'react';

const Drawer = createDrawerNavigator();

const HomeNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ header: IdmanHeader }}>
      <Drawer.Screen name='asd' component={SelectAccountScreen}/>
    </Drawer.Navigator>
  );
}

export default HomeNavigator;