import { IdmanLogo } from '@components'
import { IdmanButton } from '@components/UI'
import { PRESENTATION_ROUTES } from '@utils'
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Animated from 'react-native-reanimated'
import { ScreenProps } from 'src/types'
import styled from 'styled-components/native'

const StyledRoot = styled.View`
    flex: 1;
    padding: 10px;
    margin-bottom: 20px;
    justify-content: space-between;
`

export const Presentation2Screen = (props: ScreenProps<PRESENTATION_ROUTES.PRESENTATION2>) => {
    return (
        <StyledRoot>
            <IdmanLogo />
            <View style={styles.content}>
                <Animated.Image source={require("../../assets/images/presentation-graphics.png")} style={{ width: "100%", height: 300 }} resizeMode="contain"></Animated.Image>
                <Text style={styles.text}>
                    Birden fazla hesap oluştur.
                </Text>
                <Text style={styles.innerText}>
                    İstediğin borsa birimlerine dilediğin kadar yatırım yap.
                </Text>
            </View>
            <IdmanButton text='Giriş Yap' size={20} />
        </StyledRoot>
    )
}

const styles = StyleSheet.create({
    content: {
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "white",
        fontSize: 20
    },
    innerText: {
        flexGrow: 1,
        color: "white",
        fontSize: 20,
        textAlign: "center"
    }
})