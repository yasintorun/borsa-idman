import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FaIcon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { IconProps as VectorIconProps } from 'react-native-vector-icons/Icon';

const iconFamilies = {
    Fontawesome: FaIcon,
    AntDesign: AntIcon,
    MaterialCommunity: MaterialCommunityIcons
}

export type IconProps = VectorIconProps & {
    family?: keyof typeof iconFamilies;
}

export const Icon = (props: IconProps) => {
    const WrapIcon = iconFamilies[props.family ?? "Fontawesome"];

    return (
        <WrapIcon {...props} />
    )
}