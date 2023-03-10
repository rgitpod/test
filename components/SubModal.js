import { useContext } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import SvgButton from "./SvgButton";
import { useTheme } from "@react-navigation/native";
import { Context } from "./Context";
import Content  from "./Content";

export default function SubModal({
  modalVisible,
  setModalVisible,
  navigation,
  route,
  subIndex,
  changeTheme,
}) {
  const { colors } = useTheme();
  return (
    <View
      style={{ display: modalVisible, height: 50, backgroundColor: "green" }}
    >
      <Content navigation={navigation} route={route} subIndex={subIndex} sub='sub' />
      <Pressable onPress={() => setModalVisible("none")}>
        <Text>Close</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 45,
    width: 150,
    position: "absolute",
    zIndex: 2,
  },
  name: {
    fontSize: 16,
  },
});
