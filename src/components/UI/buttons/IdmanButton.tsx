import { COLORS } from '@utils'
import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { ViewStyle } from 'react-native'
import { StyleProp } from 'react-native'
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styled from 'styled-components/native'

type RootType = {
    color?: keyof typeof COLORS;
}
const StyledButtonRoot = styled.TouchableOpacity<RootType>`
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
    onPress?(): void;
    variant?: "outlined" | "ghost" | "fill";
    style?: StyleProp<ViewStyle>;
}

export const IdmanButton = (props: IdmanButtonProps) => {
    const { color = "primary", text, style = {}, size, variant = "fill", onPress } = props

    const overrideStyle: StyleProp<ViewStyle> = {}
    if(variant == "fill") {
        overrideStyle.backgroundColor = COLORS[color];
    } else if(variant == "outlined") {
        overrideStyle.borderColor = COLORS[color];
        overrideStyle.borderWidth = 1;
    }

    return (
        <StyledButtonRoot color={color} onPress={onPress} style={[overrideStyle, style]}>
            <StyledText size={size}>{text}</StyledText>
        </StyledButtonRoot>
    )
}