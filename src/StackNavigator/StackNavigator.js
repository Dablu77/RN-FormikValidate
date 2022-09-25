import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreenLogin from '../components/CustomHomeFirstScreen/FirstScreenLogin';
import OnboardingCoustom from '../components/CustomHomeFirstScreen/OnboardingCoustom ';
import Createnewscren from '../components/CustomHomeFirstScreen/Createnewscren';
import ButtomTabMain from './ButtomTabMain';
import SplashScreen from '../components/CustomHomeFirstScreen/SplashScreen';
import FormikValidate from '../screen/FormikValidate';





const Stack = createStackNavigator();

function Navigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                initialRouteName: "SplashScreen",
                animationEnabled: false,
            }}
        >
            {/* <Stack.Screen name='SplashScreen' component={SplashScreen} options={{ animationEnabled: false, header: () => null }} /> */}

            {/* <Stack.Screen name='OnboardingCoustom' component={OnboardingCoustom} /> */}
            {/* <Stack.Screen name='FirstScreenLogin' component={FirstScreenLogin} /> */}
            {/* <Stack.Screen name='ButtomTabMain' component={ButtomTabMain} /> */}
            {/* <Stack.Screen name='Createnewscren' component={Createnewscren} /> */}
            <Stack.Screen name='FormikValidate' component={FormikValidate} />

        </Stack.Navigator>

    )
}

export default Navigator;

