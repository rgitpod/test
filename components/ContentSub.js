import { useContext, useState } from "react";
import { StyleSheet, Text, ScrollView, View, Pressable } from "react-native";
import { index } from "./contents/data/index";
import { useTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Content from "./Content";
import SubModal from "./SubModal";

const Separator = ({ visble }) => (
  <View
    style={[styles.separator, { display: visble == "flex" ? "none" : "flex" }]}
  />
);

export default function ContentSub({ item, i, routeName, navigation }) {
  const [modalVisible, setModalVisible] = useState("none");
  const subIndex = item[item.sub];
  const { colors } = useTheme()
  
  return (
    <View>
      <View style={{ paddingHorizontal: 30 }}>
        <Pressable
          onPress={() => {
            setModalVisible("flex" == modalVisible ? "none" : "flex");
          }}
          style={{ marginTop: 9, marginBottom: 5 }}
        >
          <Text style={{ color: colors.text, fontFamily: "Rubik-Regular" }}>
            {item.title}
          </Text>
        </Pressable>
        <Separator visble={modalVisible} />
      </View>
      <SubModal
        modalVisible={modalVisible}
        navigation={navigation}
        routeName={routeName}
        subName={item.sub}
        i={i}
        subIndex={subIndex}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  desc: {
    paddingVertical: 12,
    paddingHorizontal: 6,
    flexShrink: 1,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  btn: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
});
