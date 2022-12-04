import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { IdmanLogo } from '@components'
import styled from 'styled-components/native'
import { ImNavigationDrawerProp, ScreenProps } from 'src/types'
import { COLORS, DRAWER_ROUTES, fontFamilies, fonts, ROUTES } from '@utils'
import { IdmanButton, Input } from '@components/UI'
import { Pressable } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const StyledRoot = styled.ScrollView`
  flex: 1;
`
const StyledContent = styled.View`
  padding: 20px;
  flex: 1;
  justify-content: flex-end;
`

const StyledForm = styled.View`

`

const StyledRightAligment = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  marginVertical: 10px;
`

const StyledForgottonPwdText = styled.Text`
  font-family: ${fontFamilies.kanwa}; 
  font-size: 16px;
  color: ${COLORS.opacity600};
`

const StyledMutedText = styled.Text`
  ${fonts.muted};
  color: #fff;
  text-align: center;
`

const StyledSignupText = styled.Text`
  ${fonts.muted}; 
  color: ${COLORS.primary};
  text-align: center;
  margin-left: 10px;
`
const StyledNotAccount = styled.View`
  flex-direction: row;
  marginTop: 30px;
  justify-content: center;
  align-items: center;
`

const StyledTitle = styled.Text`
  ${fonts.h1};
  text-align: center;
  color: ${COLORS.primary};
`


export const SigninScreen = (props: ScreenProps<ROUTES.SIGNIN>) => {
    const { navigation } = props
    const drawerNavigation = useNavigation<ImNavigationDrawerProp>()
    return (
        <StyledRoot>
            <IdmanLogo />
            <StyledContent>
                <StyledTitle>Giriş Yap</StyledTitle>
                <StyledForm>
                    <Input icon={{ name: "user" }} placeholder='Kullanıcı Adı' autoComplete="username" />
                    <Input icon={{ family: "MaterialCommunity", name: "key" }} placeholder='Şifre' autoComplete='password' />
                    <StyledRightAligment>
                        <TouchableOpacity>
                            <StyledForgottonPwdText>Şifremi Unuttum</StyledForgottonPwdText>
                        </TouchableOpacity>
                    </StyledRightAligment>
                    <IdmanButton text='Giriş Yap' onPress={() => drawerNavigation.getParent("drawer")?.navigate(DRAWER_ROUTES.MAIN)} />
                    <StyledNotAccount>
                        <StyledMutedText>
                            Hesabın yok mu?
                        </StyledMutedText>
                        <TouchableOpacity onPress={() => navigation.navigate(ROUTES.SIGNUP)}>
                            <StyledSignupText>Hemen Kayıt ol</StyledSignupText>
                        </TouchableOpacity>
                    </StyledNotAccount>
                </StyledForm>
            </StyledContent>
        </StyledRoot>
    )
}

const styles = StyleSheet.create({})