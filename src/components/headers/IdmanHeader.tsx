import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import { Icon } from '../UI/Icon'
import { COLORS, fonts } from '@utils'
import { useNavigation } from '@react-navigation/native'
import { ImNavigationDrawerProp } from 'src/types'
import { DrawerHeaderProps, DrawerNavigationProp } from '@react-navigation/drawer'

const StyledRoot = styled.View`
  flex-direction: row;
  padding: 10px;
  `
  const StyledLogo = styled.View`
  flex-direction: row;
  margin-left: 10px;
  align-items: center;
`
const StyledLogoImage = styled.Image`

`
const StyledLogoText = styled.Text`
${fonts.h6}
text-align: center;
color: ${COLORS.opacity900}
`
export const IdmanHeader = (props: DrawerHeaderProps) => {
  return (
    <StyledRoot>
      <Icon family='MaterialCommunity' name='menu' size={32} color={COLORS.opacity900} onPress={() => props.navigation.openDrawer()}/>
      <StyledLogo>
        <StyledLogoImage  source={require("../../assets/images/logo.png")} style={{height: 32, width: 32}} resizeMode="contain"/>
        <StyledLogoText>Borsa Idman</StyledLogoText>
      </StyledLogo>
    </StyledRoot>
  )
}

const styles = StyleSheet.create({})