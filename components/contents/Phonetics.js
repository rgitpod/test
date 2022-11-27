import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { phonetics } from './data/PhonList'
import { Zvuki } from './data/Phonetics/Zvuki'

export default function Phonetics({ navigation }) {
  return (
    <View>
      {
        phonetics.map((item, i) => (
          <TouchableOpacity onPress={() => { navigation.navigate("Note", { name: 'Phone', id: i }) }} key={i}>
            
                <Text>{item.title}</Text>
              
          </TouchableOpacity>
        ))
      }
    </View>
  );
}