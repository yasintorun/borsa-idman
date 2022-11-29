import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { COLORS, TAB_ROUTES } from '@utils';
import React from 'react';
import { AccountNavigator } from './AccountNavigator';
import { MarketNavigator } from './MarketNavigator';

const Tab = createMaterialTopTabNavigator();

export const MainNavigator = () => {
  return (
    <Tab.Navigator 
        screenOptions={{
            tabBarStyle: {
                backgroundColor: COLORS.background,
            },
            tabBarIndicatorStyle: {
                backgroundColor: COLORS.primary,
                width: "25%",
                marginLeft: "10%"
            },
            tabBarLabelStyle: {
                color: "#fff"
            }
        }}
    >
        <Tab.Screen name={TAB_ROUTES.ACCOUNT} component={AccountNavigator} options={{tabBarLabel: "Hesap"}} />
        <Tab.Screen name={TAB_ROUTES.MARKET} component={MarketNavigator} options={{tabBarLabel: "Market"}} />
    </Tab.Navigator>
  )
}