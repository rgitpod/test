import { View, StyleSheet, Pressable, Text } from "react-native";


export default function MenuButton({ navigation, title, navTo }) {
  return (
    <View style={{flexDirection: 'row'}}>
      <Pressable style={[styles.button, styles.title]} onPress={() => navigation.navigate(navTo)}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
      <Pressable style={[styles.button, styles.quest]}>
        <Text style={styles.text}>?</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 6,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 2,
    elevation: 3,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 0.5,
  },
  title: {
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    flexGrow: 1,
    marginRight: -1
  },
  quest: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    width: 50,
    marginLeft: 0
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
  },
});
