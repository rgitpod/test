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
    paddingRight: 4,
    paddingLeft: 5,
    marginTop: -3,
    marginBottom: -4,
    marginRight: 5,
  },
  p: {
    margin: 5,
    marginTop: 6,
    fontFamily: "Rubik-Regular",
    textAlign: 'justify'
  },
  li: {
    paddingLeft: 16,
    fontFamily: "Rubik-Regular",
    textAlign: 'justify'
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
  },
  alert: {
    backgroundColor: "#d2d2d4",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    fontSize: 18,
    fontFamily: "Rubik-Regular",
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
    paddingLeft: 1,
    width: wdt,
  },
});

