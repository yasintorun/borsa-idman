import { TextInput, TextInputBase } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import { COLORS, fonts } from '@utils'

const StyledInput = styled.TextInput`
  padding: 10px;
  font-size: 16;
  ${fonts.muted};
  borderWidth: 1px;
  background-color: ${COLORS.opacity100}
  borderColor: ${COLORS.opacity400};
  border-radius: 5px;
`

export const Input = () => {
    return (
        <TextInput />
    )
}