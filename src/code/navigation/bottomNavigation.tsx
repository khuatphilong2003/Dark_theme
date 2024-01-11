import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import HomeScreen from '../screens/home-screen'
import SettingScreen from '../screens/setting-screen'

const Stack = createBottomTabNavigator()

const BottomNavigation = () => {
  return (
   <Stack.Navigator>
    <Stack.Screen
    name='Home'
    component={HomeScreen}
    />
    <Stack.Screen
    name='Setting'
    component={SettingScreen}
    />
   </Stack.Navigator>
  )
}

export default BottomNavigation

