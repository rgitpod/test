import { useContext } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import SvgButton from "./SvgButton";
import { useTheme } from "@react-navigation/native";
import { Context } from "./Context";
import Content from "./Content";
import ContentItem from "./ContentItem";

export default function SubModal({
  modalVisible,
  setModalVisible,
  navigation,
  routeName,
  subIndex,
  subName,
  i,
  changeTheme,
}) {
  const { colors } = useTheme();
  return (
    <View
      style={{ display: modalVisible, height: 50, backgroundColor: "green" }}
    >
      <View
        style={{ display: modalVisible, height: 50, backgroundColor: "blue" }}
      >
        {subIndex.map((item, id) => (
          <ContentItem
            item={item}
            i={i}
            id={id}
            subName={subName}
            routeName={routeName}
            navigation={navigation}
            key={id}
          />
        ))}
      </View>
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
