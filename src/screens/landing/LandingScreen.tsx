import { IdmanButton } from '@components/UI'
import { ScreenProps } from '@navigations'
import React from 'react'
import { Text, View } from 'react-native'
import { COLORS, ROUTES } from '@utils'
import styled from 'styled-components/native'
import { IdmanLogo } from '@components'
import { fonts } from '@utils'
import { StyledColorText } from '@utils'

const StyledRoot = styled.View`
  flex: 1;
  padding: 10px;
  margin-bottom: 20px;
  justify-content: space-between;
`

const StyledText = styled.Text`
  ${fonts.muted};
  color: #ccc;
  text-align: center;
`

export const LandingScreen = (props: ScreenProps<ROUTES.LANDING>) => {
  return (
    <StyledRoot>
      <View>
        <IdmanLogo size="large" />
        <StyledText>Önce <StyledColorText color={COLORS.primary}>İdman</StyledColorText> Sonra Gerçek <StyledColorText color={COLORS.primary}>Borsa</StyledColorText></StyledText>
      </View>
      <IdmanButton size={20} text='Hadi Başlayalım' />
    </StyledRoot>
  )
}
