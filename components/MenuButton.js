import { useState} from 'react'
import { View, StyleSheet, Pressable, Text } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { useTheme } from '@react-navigation/native'
import Modal from './Modal'

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
      corners={"topStart"}
    >
      <Pressable
        style={[styles.button, styles.title, {backgroundColor: colors.card}]}
        onPress={() => navigation.navigate(navTo)}
      >
        <Text style={[styles.text, {color: colors.text}]}>{title}</Text>
      </Pressable>
      <Pressable style={[styles.button, styles.quest, {backgroundColor: colors.card}]} onPress={() => setModalVisible(true)}>
        <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />
        <Text style={styles.text}>?</Text>
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
    fontSize: 18,
    lineHeight: 21,
    fontFamily: 'Rubik-SemiBold'
  },
});
