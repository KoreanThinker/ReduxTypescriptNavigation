import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './HomeScreen';

const RootStack = createStackNavigator(
    {
        HomeScreen
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            title: 'Home',
        }),
        initialRouteName: 'HomeScreen'
    }
);

export default createAppContainer(RootStack);