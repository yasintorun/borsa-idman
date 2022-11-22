import { COLORS } from '@utils'
import React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'

type RootType = {
    color?: keyof typeof COLORS;
}
const StyledButtonRoot = styled.TouchableOpacity<RootType>`
    background-color: ${props => COLORS[props.color ?? "primary"]};
    border-radius: 5px;
    padding: 10px;
`

type TextType = {
    size?: number;
}
const StyledText = styled.Text<TextType>`
    color: white;
    text-align: center;
    font-size: ${props => (props.size ?? 16) + "px"};
    font-family: Kadwa-Regular;
`

export type IdmanButtonProps = {
    color?: keyof typeof COLORS;
    text: string;
    size?: number;
}

export const IdmanButton = (props: IdmanButtonProps) => {
    const { color, text, size } = props
    return (
        <StyledButtonRoot color={color}>
            <StyledText size={size}>{text}</StyledText>
        </StyledButtonRoot>
    )
}