import { IdmanDrawer, IdmanHeader } from '@components';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as React from 'react';
import { MainNavigator } from './MainNavigator';

const Drawer = createDrawerNavigator();

const HomeNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ header: IdmanHeader }} drawerContent={(props) => <IdmanDrawer />}>
      <Drawer.Screen name='main' component={MainNavigator}/>
    </Drawer.Navigator>
  );
}

export default HomeNavigator;