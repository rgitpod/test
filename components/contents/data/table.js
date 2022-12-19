import { View, Text, StyleSheet } from "react-native";

const Table = ({ children }) => {
  return <View style={styles.table}>{children}</View>;
};

const Row = ({ children }) => {
  return <View style={styles.row}>{children}</View>;
};

const Col = ({ children, style }) => {
    console.log(style)
  return (
    <View style={[styles.col, style]}>
      <Text>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  col: {
    borderRightWidth: 1,
    borderBottomWidth: 1,
    padding: 5,
    flex: 1
  },
  row: {
    flexDirection: "row",
  },
  table: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    margin: 7
  },
});

export { Table, Row, Col };
