import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styled from 'styled-components/native'
import { Account } from '@models'
import { fonts } from '@utils'
import { AccountAmountInfoCard } from './AccountAmountInfoCard'

const StyledRoot = styled.TouchableOpacity`
    background-color: rgba(255, 255, 255, 0.03);
    border: 2px solid rgba(255, 255, 255, 0.1);
    marginVertical: 10px;
    padding: 20px;
    border-radius: 10px;
    flex: 1;
`
const StyledName = styled.Text`
    ${fonts.h5}    
    color: #fff;
`
const StyledInfos = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 30px;
`
export type AccountCardProps = {
    account: Account;
}
export const AccountCard = (props: AccountCardProps) => {
    const {account} = props
    return (
        <StyledRoot>
            <StyledName>{account.name}</StyledName>
            <StyledInfos>
                <AccountAmountInfoCard label='Başlangıç Tutarı' value={account.startingAmount} bgColor='#18ADB7' color='#fff' />
                <AccountAmountInfoCard label='Mevcut Tutarı' value={account.startingAmount} bgColor='#8E18B7' color='#fff'/>
            </StyledInfos>
        </StyledRoot>
    )
}