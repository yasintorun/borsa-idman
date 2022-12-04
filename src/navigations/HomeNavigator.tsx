import { IdmanDrawer, IdmanHeader } from '@components';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DRAWER_ROUTES } from '@utils';
import * as React from 'react';
import AuthNavigator from './AuthNavigator';
import { MainNavigator } from './MainNavigator';
import PresentationNavigator from './PresentationNavigator';

const Drawer = createDrawerNavigator();

const HomeNavigator = () => {
  return (
    <Drawer.Navigator id='drawer' screenOptions={{ header: IdmanHeader }} drawerContent={(props) => <IdmanDrawer />}>
        <Drawer.Screen name={DRAWER_ROUTES.LANDING} component={PresentationNavigator} />
        <Drawer.Screen name={DRAWER_ROUTES.AUTH} component={AuthNavigator}/>
      <Drawer.Screen name={DRAWER_ROUTES.MAIN} component={MainNavigator}/>
    </Drawer.Navigator>
  );
}

export default HomeNavigator;