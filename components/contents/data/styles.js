import { StyleSheet, Dimensions } from "react-native";

const wdt = Dimensions.get("window").width;

export const styles = StyleSheet.create({
  strong: {
    fontFamily: "Rubik-SemiBold",
  },
  italic: {
    fontStyle: "italic",
  },
  number: {
    overflow: "hidden",
    borderRadius: 9,
    fontSize: 20,
    paddingRight: 4,
    paddingLeft: 5,
    marginTop: -3,
    marginBottom: -4,
    marginRight: 5,
  },
  p: {
    margin: 4,
    marginTop: 6,
    fontSize: 18,
    fontFamily: "Rubik-Regular",
  },
  li: {
    paddingLeft: 16,
    fontSize: 18,
    fontFamily: "Rubik-Regular",
  },
  litera0: {
    color: "black",
    fontSize: 19,
    textShadowRadius: 1.8,
  },
  litera: {
    color: "black",
    fontSize: 19,
    textShadowRadius: 1.8,
  },
  alertText: {
    fontFamily: "Rubik-SemiBoldItalic",
    fontSize: 14,
    marginRight: 12,
    marginTop: 2,
    textAlign: 'right'
  },
  alert: {
    backgroundColor: "#d7d7d7",
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 18,
    fontFamily: "Rubik-Regular",
    padding: 5,
    margin: 5
  },
  primer: {
    paddingLeft: 16,
    marginTop: 2,
    fontSize: 18,
    fontFamily: "Rubik-Regular",
    fontSize: 18,
  },
  t: {
    fontFamily: "Rubik-Regular",
    fontSize: 18,
    paddingLeft: 8,
    marginBottom: 5,
    width: wdt,
  },
});
