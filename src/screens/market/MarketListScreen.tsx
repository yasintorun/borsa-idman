import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ScreenProps } from 'src/types'
import { ROUTES } from '@utils'
import { MarketItem } from '@components'
import styled from 'styled-components/native'
import { MarketExchange } from 'src/models/MarketItem'

const StyledRoot = styled.View`
  padding: 20px;
`

const fakeData: MarketExchange[] = [
  {
    id: 1,
    instantChange: 0.003,
    logo: "https://cdn-icons-png.flaticon.com/512/1303/1303247.png",
    name: "Dolar",
    subname: "$ / ₺",
    value: 18.62
  },
  {
    id: 2,
    instantChange: -0.102,
    logo: "https://cdn-icons-png.flaticon.com/512/1303/1303248.png",
    name: "Euro",
    subname: "€ / ₺",
    value: 19.31
  },
  {
    id: 3,
    instantChange: +1.729,
    logo: "https://cdn-icons-png.flaticon.com/512/2822/2822290.png",
    name: "Altın",
    subname: "Gram",
    value: 1075
  },
  {
    id: 3,
    instantChange: +3.729,
    logo: "https://cdn-icons-png.flaticon.com/512/2822/2822290.png",
    name: "Altın",
    subname: "Çeyrek",
    value: 1730
  }
]

export const MarketListScreen = (props: ScreenProps<ROUTES.MARKET_LIST>) => {
  const [marketExchange, setMarketExchange] = useState<MarketExchange[]>(fakeData)
  return (
    <StyledRoot>
      <FlatList
        data={marketExchange}
        renderItem={({index, item}) => <MarketItem key={index} item={item} />}
      />
    </StyledRoot>
  )
}

const styles = StyleSheet.create({})