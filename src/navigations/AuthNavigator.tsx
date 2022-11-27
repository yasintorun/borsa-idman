import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ROUTES } from '@utils'
import { ScreenParamList } from 'src/types'
import { SignupScreen } from '@screens'

const Stack = createNativeStackNavigator<ScreenParamList>()

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTES.SIGNUP} component={SignupScreen} />
      {/* <Stack.Screen name={ROUTES.SIGNIN} component={SignupScreen} /> */}
    </Stack.Navigator>
  )
}

export default AuthNavigator

const styles = StyleSheet.create({})