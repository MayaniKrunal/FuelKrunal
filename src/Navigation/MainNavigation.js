import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from "../Navigation/TabNavigation";
import Pricing from '../Screen/Pricing'
const Stack = createStackNavigator();

export default MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name='TabNavigation' component={TabNavigation}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}