import {  Appearance, Text, useColorScheme } from 'react-native'
import React, { useEffect, useState } from 'react'
import DarkMode from './src/utils/darkMode.context'
import Navigation from './src/code/navigation';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [useDeviceSettings, setUseDeviceSettings] = useState(false);
  const schema = useColorScheme()
  useEffect(()=>{
    let subscription: any;
    if(useDeviceSettings){
      subscription = Appearance.addChangeListener(schema=>{
        setIsDarkMode(schema.colorScheme === 'dark')
      })
    }
    return ()=>{
      if(subscription){
        subscription.remove()
        subscription = null
      }
    }
  },[useDeviceSettings,schema])
  return (
    <DarkMode.Provider
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    value={{
      isDarkMode,
      setIsDarkMode,
      useDeviceSettings,
      setUseDeviceSettings,
    }}
    >
      <Navigation isDarkMode = {isDarkMode}/>
    </DarkMode.Provider >
  )
}

export default App