import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ROUTES } from '@utils'
import { MarketListScreen } from '@screens'

const Stack = createNativeStackNavigator()

export const MarketNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name={ROUTES.MARKET_LIST} component={MarketListScreen} />
    </Stack.Navigator>
  )
}

