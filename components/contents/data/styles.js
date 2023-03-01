import { StyleSheet, Dimensions } from "react-native";

const wdt = Dimensions.get("screen").width;

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
    marginTop: 12,
    fontFamily: "Rubik-Regular",
    textAlign: "justify",
  },
  li: {
    marginTop: -7,
    paddingLeft: 12,
    fontFamily: "Rubik-Regular",
    textAlign: "justify",
  },
  litera0: {
    color: "black",
    textShadowRadius: 1.8,
  },
  litera: {
    color: "black",
    textShadowRadius: 1.8,
  },
  alertText: {
    fontFamily: "Rubik-SemiBoldItalic",
    fontSize: 14,
    marginRight: 12,
    marginTop: 2,
    textAlign: "right",
  },
  alert: {
    backgroundColor: "#d7d7d7",
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 18,
    fontFamily: "Rubik-Regular",
    padding: 5,
    margin: 0.1,
  },
  primer: {
    paddingLeft: 12,
    marginTop: -7,
    fontSize: 18,
    fontFamily: "Rubik-Regular",
    fontSize: 18,
  },
  t: {
    fontFamily: "Rubik-Regular",
    paddingLeft: 8,
    marginBottom: 5,
    width: wdt,
  },
  line: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});
