import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AccountListScreen } from '@screens'
import { ROUTES } from '@utils'
import React from 'react'
import { ScreenParamList } from 'src/types'

const Stack = createNativeStackNavigator<ScreenParamList>()

export const AccountNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.ACCOUNT_LIST} component={AccountListScreen} />
    </Stack.Navigator>
  )
}

