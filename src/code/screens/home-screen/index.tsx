import { View } from 'react-native'
import React, { useContext } from 'react'
import { Card, Text } from '../../../utils/Theme'
import DarkMode from '../../../utils/darkMode.context';

const HomeScreen = () => {
  const {isDarkMode} = useContext(DarkMode)
  return (
    <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
      <Text isDarkMode={isDarkMode}>HomeScreenadfadasdasds</Text>
      <Card isDarkMode={isDarkMode} style={{height:50,width:100}}>
      <Text isDarkMode={!isDarkMode}>Longmg</Text>

      </Card>
    </View>
  )
}

export default HomeScreen