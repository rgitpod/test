import { useState} from 'react'
import { View, StyleSheet, Pressable, Text, Dimensions } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { useTheme } from '@react-navigation/native'
import Modal from './Modal'

const fontScale = Dimensions.get('window').fontScale

export default function MenuButton({ navigation, title, navTo }) {
  const [modalVisible, setModalVisible] = useState(false);
  const { colors } = useTheme()
  return (
    <Shadow
      distance={4}
      style={{
        alignSelf: "stretch",
        flexDirection: "row",
        borderRadius: 7,
      }}
      containerStyle={{ margin: 10 }}
      offset={[0, 1]}
    >
      <Pressable
        style={({pressed}) => [styles.button, styles.title, {backgroundColor: pressed ? colors.pressed : colors.card}]}
        onPress={() => navigation.navigate(navTo)}
      >
        <Text style={[styles.text, {color: colors.text}]}>{title}</Text>
      </Pressable>
      <Pressable style={({pressed}) => [styles.button, styles.quest, {backgroundColor: pressed ? colors.pressed : colors.card}]} onPress={() => setModalVisible(navTo)}>
        <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} routName={navTo}/>
        <Text style={[styles.text, {color: colors.text}]}>?</Text>
      </Pressable>
    </Shadow>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 2,
    backgroundColor: "white",
  },
  title: {
    borderRightWidth: 0.2,
    borderRightColor: 'gray',
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    flexGrow: 1,
  },
  quest: {
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    width: 50,
  },
  text: {
    fontSize: 18/fontScale,
    lineHeight: 21,
    fontFamily: 'Rubik-SemiBold'
  },
});
