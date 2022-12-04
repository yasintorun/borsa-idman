import { ActivityIndicator, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { StorageService } from '@services'
import { COLORS, STORAGE_KEYS } from '@utils'
import { donePresentation } from '@store'
import { AppNavigator } from '@navigations'

const Launch = () => {
    const [loading, setLoading] = useState<boolean>(true)

    const dispatch = useDispatch()
    
    useEffect(() => {
        const storageService = new StorageService()
        const promises = [
            storageService.has(STORAGE_KEYS.DONE_PRESENTATION).then(has => {
                has && dispatch(donePresentation(has))
            })
        ]
        Promise.all(promises).finally(() => {
            setLoading(false)
        })
    }, [])

    return loading ? (
        <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }} >
            <ActivityIndicator size="large" color={COLORS.primary} />
        </View >
    ) : (
        <AppNavigator />
    )
}

export default Launch