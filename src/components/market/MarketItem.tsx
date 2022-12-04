import { StyleSheet, Image } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import { COLORS, fonts } from '@utils'
import { MarketExchange } from 'src/models/MarketItem'

const StyledRoot = styled.TouchableOpacity`
    padding: 10px;
    marginVertical: 10px;
    backgroundColor: #23232F;
    borderRadius: 5px;
    flexDirection: row;
    justify-content: space-between;
    alignItems: center;
`
const StyledLeftNode = styled.View`
    flexDirection: row;
    alignItems: center;
`
const StyledRightNode = styled.View`

`

const StyledItemLogo = styled.Image`
    width: 50px;
    height: 50px;
    marginRight: 10px;
`
const StyledTitle = styled.View`

`
const StyledTitleText = styled.Text`
    ${fonts.h5}
    color: #fff;
`
const StyledSubTitleText = styled.Text`
    ${fonts.muted}
    color: #fff;
`
const StyledValueText = styled.Text`
    ${fonts.h5}
    color: #fff;
    textAlign: right;
`
const StyledChangeText = styled.Text<{ negative: boolean }>`
    ${fonts.muted}
    color: ${props => props.negative ? "#B7311F" : "#1FB76E"};
    textAlign: right;
`

export type MarketItemProps = {
    item: MarketExchange
}

export const MarketItem = (props: MarketItemProps) => {
    const {item} = props
    return (
        <StyledRoot>
            <StyledLeftNode>
                <StyledItemLogo source={{uri: item.logo}} />
                <StyledTitle>
                    <StyledTitleText>{item.name}</StyledTitleText>
                    <StyledSubTitleText>{item.subname}</StyledSubTitleText>
                </StyledTitle>
            </StyledLeftNode>
            <StyledRightNode>
                <StyledValueText>{item.value}</StyledValueText>
                <StyledChangeText negative={item.instantChange < 0}>{item.instantChange}</StyledChangeText>
            </StyledRightNode>
        </StyledRoot>
    )
}