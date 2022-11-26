import { createDrawerNavigator, DrawerScreenProps } from '@react-navigation/drawer';
import { LandingScreen, Presentation2Screen, PresentationScreen } from '@screens';
import * as React from 'react';
import { ROUTES } from '@utils';

const Drawer = createDrawerNavigator();

const HomeNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      {/* <Drawer.Screen name={ROUTES.PRESENTATION2} component={Presentation2Screen} />
      <Drawer.Screen name={ROUTES.PRESENTATION} component={PresentationScreen} />
      <Drawer.Screen name={ROUTES.LANDING} component={LandingScreen} /> */}
    </Drawer.Navigator>
  );
}

export default HomeNavigator;