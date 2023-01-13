import { View, Text, StyleSheet } from "react-native";

const Table = ({ children }) => {
  return <View style={styles.table}>{children}</View>;
};

const Row = ({ children }) => {
  return <View style={styles.row}>{children}</View>;
};

const Col = ({ children, pr }) => {
  return (
    <View style={[styles.col, styles[pr]]}>
      <Text style={[styles["text" + pr], styles.text]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  col: {
    borderRightWidth: 1,
    borderBottomWidth: 1,
    padding: 5,
    flex: 1,
    backgroundColor: "#d6d6d6",
  },
  text: {
    fontFamily: "Rubik-Regular",
    fontSize: 18,
  },
  colHed: {
    borderRightWidth: 1,
    borderBottomWidth: 1,
    padding: 5,
    flex: 1,
    backgroundColor: "#bdbdbd",
  },
  textcolHed: {
    fontSize: 15,
    fontFamily: "Rubik-SemiBold",
  },
  row: {
    flexDirection: "row",
  },
  table: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    margin: 7,
  },
});

export { Table, Row, Col };
