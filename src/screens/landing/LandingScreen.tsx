import { ScreenProps } from '@navigations'
import React from 'react'
import { Text, View } from 'react-native'
import { ROUTES } from 'src/constants'

export const LandingScreen = (props: ScreenProps<ROUTES.LANDING>) => {
  return (
    <View>
      <Text>Landing</Text>
    </View>
  )
}
