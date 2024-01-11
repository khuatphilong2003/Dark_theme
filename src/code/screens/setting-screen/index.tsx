import {View, TouchableOpacity, useColorScheme, ColorSchemeName} from 'react-native';
import React, {useCallback, useContext, useEffect} from 'react';
import DarkMode from '../../../utils/darkMode.context';
import {Text} from '../../../utils/Theme';

const SettingScreen = () => {
  const {isDarkMode, setIsDarkMode,useDeviceSettings,setUseDeviceSettings} = useContext(DarkMode);
  const schema = useColorScheme();

  const handleDarkMode = useCallback(() => {
    setIsDarkMode(!isDarkMode);
  }, [isDarkMode,schema,useDeviceSettings]);

  const handleDevice = useCallback(()=>{
    setUseDeviceSettings(true);
    console.log(useDeviceSettings);
    
    if(schema === 'dark'){
      setIsDarkMode(true)
      return 
    }
    setIsDarkMode(false)
  },[useDeviceSettings])
  const currentActivatedTheme: ColorSchemeName = isDarkMode ? 'dark': 'light'

  useEffect(()=>{
    if(currentActivatedTheme !== schema){
      setUseDeviceSettings(false)
    }
  },[isDarkMode])

  return (
    <View>
      <View style={{flexDirection: 'row', padding: 20}}>
        <View style={{flex: 1}}>
          <Text isDarkMode={isDarkMode}>Use Device Theme</Text>
        </View>
        <TouchableOpacity
        hitSlop={20}
        onPress={handleDevice}
        >
          <Text isDarkMode={isDarkMode}>{useDeviceSettings?'On':'False'}</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', padding: 20}}>
        <View style={{flex: 1}}>
          <Text isDarkMode={isDarkMode}>Dark Mode</Text>
        </View>
        <TouchableOpacity hitSlop={20} onPress={handleDarkMode}>
          <Text isDarkMode={isDarkMode}>{isDarkMode ? 'On' : 'False'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingScreen;
