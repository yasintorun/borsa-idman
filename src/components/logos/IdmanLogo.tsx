import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IdmanText } from '../UI'

const sizes = {
    small: {
        logo: 50,
        font: 12
    },
    medium: {
        logo: 120,
        font: 18
    },
    large: {
        logo: 200,
        font: 24
    },
}

export type IdmanLogoProps = {
    size?: keyof typeof sizes;
}
export const IdmanLogo = (props: IdmanLogoProps) => {
    const size = sizes[props.size ?? "medium"]
    return (
        <View>
            <Image source={require("../../assets/images/logo.png")} style={{height: size.logo, width: "100%"}} resizeMode="contain"></Image>
            <IdmanText style={[styles.text, {fontSize: size.font}]}>BORSA IDMAN</IdmanText>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "white",
        textAlign: "center"
    }
})