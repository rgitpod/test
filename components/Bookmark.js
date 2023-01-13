import { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Bookmark({ navigation }) {
  const [favs, setFavs] = useState([])
  
  useEffect(() => {
    getFavs()
  }, [])
  
  const getFavs = async () => {
    try {
      const favs = await AsyncStorage.getItem('favs')
      if (todos != null) {
        setFavs(JSON.parse(todos));
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a Bookmark modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}