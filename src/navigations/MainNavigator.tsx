import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator, MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { SelectAccountScreen, ExchangeListScreen } from '@screens';
import { COLORS } from '@utils';

const Tab = createMaterialTopTabNavigator();

const T = (props: MaterialTopTabBarProps) => {
    // console.log(props)
    console.log(props.state.routeNames)
    return <Text>Tsasd</Text>
}

export const MainNavigator = () => {
  return (
    <Tab.Navigator 
        screenOptions={{
            tabBarStyle: {
                backgroundColor: COLORS.background,
            },
            tabBarIndicatorStyle: {
                backgroundColor: COLORS.opacity300
            },
            tabBarLabelStyle: {
                color: "#fff"
            }
        }}
    >
        <Tab.Screen name='Account' component={SelectAccountScreen} />
        <Tab.Screen name='Exchange' component={ExchangeListScreen} />
    </Tab.Navigator>
  )
}