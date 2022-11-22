import { IdmanLogo } from '@components'
import { IdmanButton } from '@components/UI'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import Animated from 'react-native-reanimated'
import styled from 'styled-components/native'

const StyledRoot = styled.View`
    flex: 1;
    margin-bottom: 20px;
    justify-content: space-between;
`

export type PresentationScreenProps = {

}
export const PresentationScreen = (props: PresentationScreenProps) => {
    return (
        <StyledRoot>
            <IdmanLogo />
            <View>
                <Animated.Image source={require("../../assets/images/exchange-currency.png")} style={{ width: "100%", height: 300 }} resizeMode="contain"></Animated.Image>
                <Animated.Text animation="pulse" easing="ease-out" iterationCount="infinite" style={styles.text}>
                    Gerçek Borsa değerleri ile
                    <>
                        para üzerinden kendinizi sınayın.
                    </>
                </Animated.Text>
            </View>
            <IdmanButton text='Sonraki' size={20}/>
        </StyledRoot>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "white",
    }
})