import { StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import styled from 'styled-components/native'
import { IdmanButton } from '@components/UI'
import { Account } from '@models'
import { AccountCard } from '@components'

const StyledRoot = styled.View`
  flex: 1;
  paddingHorizontal: 20px;
  margin-top: 20px;
`

const fakeData: Account[] = [
  {
    id: 1,
    name: "Kasım Ayı denemeler 2",
    startingAmount: 32000
  },
  {
    id: 2,
    name: "Kasım Ayı denemeler 1",
    startingAmount: 12000
  },
  {
    id: 3,
    name: "Ekim altın",
    startingAmount: 13400
  },
  {
    id: 4,
    name: "Eylül Dolar $",
    startingAmount: 5550
  },
  {
    id: 5,
    name: "Ağustos Ayı denemeler 1",
    startingAmount: 1200
  }
]

export const AccountListScreen = () => {
  const [accounts, setAccounts] = useState<Account[]>(fakeData)

  return (
    <StyledRoot>
      <IdmanButton text='Yeni Hesap Oluştur' />
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={accounts}
        renderItem={(props) => <AccountCard account={props.item} />}
      />
    </StyledRoot>
  )
}

const styles = StyleSheet.create({})