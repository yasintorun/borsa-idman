import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SigninScreen, SignupScreen } from '@screens'
import { ROUTES } from '@utils'
import React from 'react'
import { StyleSheet } from 'react-native'
import { ScreenParamList } from 'src/types'

const Stack = createNativeStackNavigator<ScreenParamList>()

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.SIGNIN} component={SigninScreen} />
      <Stack.Screen name={ROUTES.SIGNUP} component={SignupScreen} />
    </Stack.Navigator>
  )
}

export default AuthNavigator

const styles = StyleSheet.create({})