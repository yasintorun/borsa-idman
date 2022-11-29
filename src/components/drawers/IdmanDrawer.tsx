import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { IdmanLogo } from '../logos/IdmanLogo'
import styled from 'styled-components/native'
import { IdmanButton } from '../UI/buttons'
import {version} from '../../../package.json'
import { COLORS, fonts } from '@utils'
import { Icon } from '../UI/Icon'
const StyledRoot = styled.View`
  flex: 1;
  background-color: #272736;
  justify-content: space-between;
`

const StyledVersion = styled.Text`
  ${fonts.muted}
  color: ${COLORS.opacity200};
  text-align: center;
`

const StyledVipButton = styled.TouchableOpacity`
  background-color: #6417E3;
  flex-direction: row;
  justify-content: center;
  padding: 10px;
`

const StyledVipText = styled.Text`
  ${fonts.h5}
  color: #fff;
`

export const IdmanDrawer = () => {
  return (
    <StyledRoot>
      <View>
        <IdmanLogo />
        <StyledVipButton>
          <Icon name='crown-outline' family='MaterialCommunity' size={32} color="#FFD700" selectionColor={"#FFD700"}/>
          <StyledVipText>Premium Ol</StyledVipText>
        </StyledVipButton>
      </View>
      <View>
        <IdmanButton text='Çıkış Yap' color='danger' style={{borderRadius: 0}}/>
        <StyledVersion>v{version}</StyledVersion>
      </View>
    </StyledRoot>
  )
}