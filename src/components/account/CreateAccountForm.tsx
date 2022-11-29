import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Input } from '../UI/Input'
import styled from 'styled-components/native'
import { IdmanButton } from '../UI/buttons'
import { BottomSheetTextInput } from '@gorhom/bottom-sheet'

const StyledRoot = styled.View`
    flex: 1;
    width: 100%;
    padding: 10px;
`

export const CreateAccountForm = () => {
  return (
    <StyledRoot>
      <Input icon={{name: "header"}} placeholder='Hesap Adı' />
      <Input icon={{name: "money"}} placeholder='Başlangıç Tutarı' keyboardType='numeric' />
      <IdmanButton text='Hesabı Oluştur' size={20} style={{marginTop: 20}}/>
    </StyledRoot>
  )
}