import { DefaultTheme, NavigationContainer, Theme } from '@react-navigation/native'
import React from 'react'
import BottomNavigation from './bottomNavigation'
import {
    DarkTheme,
  } from '@react-navigation/native';

type DataProps={
    isDarkMode: boolean
}
const Navigation:React.FC<DataProps> = ({isDarkMode}) => {

    const CustomDarkTheme: Theme = {
        ...DarkTheme,
        dark: true,
        colors: {
          ...DarkTheme.colors,
          primary: 'white',
          background: '#202120',
          card: '#121212',
        },
      };
   
  return (
   <NavigationContainer theme={isDarkMode?CustomDarkTheme:DefaultTheme} >
        <BottomNavigation/>
   </NavigationContainer>
  )
}

export default Navigation

