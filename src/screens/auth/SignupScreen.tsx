import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { IdmanLogo } from '@components'
import styled from 'styled-components/native'
import { ScreenProps } from 'src/types'
import { COLORS, fonts, ROUTES } from '@utils'

const StyledRoot = styled.ScrollView`

`
const StyledContent = styled.View`

`

const StyledForm = styled.View`

`

const StyledInput = styled.TextInput`
  padding: 10px;
  font-size: 16;
  ${fonts.muted};
  borderWidth: 1px;
  background-color: ${COLORS.opacity100}
  borderColor: ${COLORS.opacity400};
  border-radius: 5px;
`

export const SignupScreen = (props: ScreenProps<ROUTES.SIGNUP>) => {
  return (
    <StyledRoot>
      <IdmanLogo />
      <StyledContent>
        <StyledForm>
          <StyledInput style={{color: "white", }} cursorColor={COLORS.primary} placeholderTextColor="#f2f2f2" placeholder='Kullanıcı Adı' autoComplete="username" />
          <StyledInput style={{color: "white", }} cursorColor={COLORS.primary} placeholderTextColor="#f2f2f2" placeholder='Şifre' autoComplete='password' />
        </StyledForm>
      </StyledContent>
    </StyledRoot>
  )
}

const styles = StyleSheet.create({})