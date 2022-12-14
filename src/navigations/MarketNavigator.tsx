import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MarketListScreen } from '@screens'
import { ROUTES } from '@utils'
import React from 'react'
import { ScreenParamList } from 'src/types'

const Stack = createNativeStackNavigator<ScreenParamList>()

export const MarketNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={ROUTES.MARKET_LIST} component={MarketListScreen} />
    </Stack.Navigator>
  )
}

