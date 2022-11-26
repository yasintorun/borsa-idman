import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LandingScreen, Presentation2Screen, PresentationScreen } from '@screens';
import { PRESENTATION_ROUTES } from '@utils';
import React from 'react'
import { ScreenParamList } from 'src/types';

const Stack = createNativeStackNavigator<ScreenParamList>();

const PresentationNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name={PRESENTATION_ROUTES.LANDING} component={LandingScreen} />
        <Stack.Screen name={PRESENTATION_ROUTES.PRESENTATION} component={PresentationScreen} />
        <Stack.Screen name={PRESENTATION_ROUTES.PRESENTATION2} component={Presentation2Screen} />
    </Stack.Navigator>
  )
}

export default PresentationNavigator