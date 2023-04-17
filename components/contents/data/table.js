import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "@react-navigation/native";

const Table = ({ children }) => {
  return <View style={styles.table}>{children}</View>;
};

const Row = ({ children }) => {
  return <View style={styles.row}>{children}</View>;
};

const Col = ({ children, pr }) => {
  const { colors } = useTheme()
  return (
    <View style={[styles.col, styles[pr], {backgroundColor: pr ? colors.tableHead : colors.table}]}>
      <Text style={[styles["text" + pr], styles.text, {color: colors.text}]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  col: {
    borderRightWidth: 1,
    borderBottomWidth: 1,
    padding: 5,
    flex: 1,
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
