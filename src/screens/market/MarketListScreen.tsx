import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScreenProps } from 'src/types'
import { ROUTES } from '@utils'

export const MarketListScreen = (props: ScreenProps<ROUTES.MARKET_LIST>) => {
  return (
    <View>
      <Text>ExchangeListScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})