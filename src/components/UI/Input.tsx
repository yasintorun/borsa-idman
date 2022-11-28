import { COLORS, fonts } from '@utils'
import React from 'react'
import { ViewStyle } from 'react-native'
import { StyleProp } from 'react-native'
import { View } from 'react-native'
import { TextInputProps } from 'react-native'
import styled from 'styled-components/native'
import { Icon, IconProps } from './Icon'

const StyledRoot = styled.View`
    borderWidth: 1px;
    background-color: ${COLORS.opacity100}
    borderColor: ${COLORS.opacity400};
    border-radius: 5px;
    flex-direction: row;
    align-items: center;
    padding: 5px 10px;
    marginVertical: 5px;
`

const StyledInput = styled.TextInput`
    font-size: 16px;
    color: white;
    flex: 1;
    align-self: center;
    flex: 1;
`

type InputProps = TextInputProps & {
    icon?: IconProps;
    outStyle?: StyleProp<ViewStyle>;
}

export const Input = (props: InputProps) => {
    const {icon, outStyle, ...others} = props;
    return (
        <StyledRoot style={[outStyle]}>
            {icon && (
                <Icon size={16} style={{marginRight: 10}} color="#f2f2f2" {...icon} />
            )}
            {/* @ts-ignore */}
            <StyledInput cursorColor={COLORS.primary} placeholderTextColor="#f2f2f2" {...others} />
        </StyledRoot>
    )
}