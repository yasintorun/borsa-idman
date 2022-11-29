import { fontFamilies, fonts } from '@utils'
import React from 'react'
import { StyleProp, TextStyle } from 'react-native'
import styled from 'styled-components/native'

const StyledRoot = styled.View`
  border-radius: 5px;
  padding: 0px 20px;
  align-items: center;
`
const StyledLabel = styled.Text`
  font-size: 12px;
  font-family: ${fontFamilies.kanwa}
`

const StyledValue = styled.Text`
  ${fonts.h3}
`


export type AccountAmountInfoCardProps = {
  color?: string;
  bgColor?: string;
  label: string;
  value: string | number;
}
export const AccountAmountInfoCard = (props: AccountAmountInfoCardProps) => {
  const { 
    bgColor = "#fff",
    color = "#333",
    label,
    value
  } = props;
  
  const textStyle: StyleProp<TextStyle> = {
    color: color
  }

  return (
    <StyledRoot style={{backgroundColor: bgColor}}>
      <StyledLabel style={[textStyle]}>{label}</StyledLabel>
      <StyledValue style={[textStyle]}>{value}</StyledValue>
    </StyledRoot>
  )
}