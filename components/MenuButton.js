import { View, StyleSheet, Pressable, Text } from "react-native";
import { Shadow } from "react-native-shadow-2";
import { useTheme } from '@react-navigation/native'

export default function MenuButton({ navigation, title, navTo }) {
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
      <Pressable style={[styles.button, styles.quest, {backgroundColor: colors.card}]}>
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
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    flexGrow: 1,
  },
  quest: {
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    width: 40,
    borderLeftWidth: 0.2,
    borderLeftColor: 'gray'
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontFamily: 'Rubik-SemiBold'
  },
});
