import { useState, useContext } from 'react'
import { View, Text, Button } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Context } from './Context'
import { P } from './contents/data/tags'

export default function FontSize() {
  const { settings } = useContext(Context)
  const { setSettings } = useContext(Context)
  
  const saveSettings = async (n) => {
    const str = JSON.stringify(n)
    await AsyncStorage.setItem('settings', str)
  }
  
  const utilFun = (n) => {
        setSettings(n)
        saveSettings(n)
  }
  
  const incrFont = () => {
        for (const key in settings.fontSizes) {
          settings.fontSizes[key] += 0.5
        }
        utilFun({...settings})
  }
  
  const decrFont = () => {
        for (const key in settings.fontSizes) {
          settings.fontSizes[key] -= 0.5
        }
        utilFun({...settings})
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <P>По словам разработчиков, эта зима была для них тяжёлой и сопровождалась многочисленными болезнями, поэтому они не успеют выпустить игру в намеченный ранее срок.</P>
      <Text>{console.log(settings.fontSizes)}</Text>
      <Button 
      onPress={incrFont} 
      title="+ size" />
      <Button 
      onPress={decrFont} 
      title="- size" />
    </View>
  );
}