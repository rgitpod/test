import { useContext, useState } from "react";
import { StyleSheet, Text, ScrollView, View, Pressable } from "react-native";
import { index } from "./contents/data/index";
import { useTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Content from "./Content";
import SubModal from "./SubModal";

const Separator = () => <View style={styles.separator} />;

export default function ContentSub({ item, i, routeName, navigation}) {
  const [modalVisible, setModalVisible] = useState("none");
  const subIndex = item[item.sub]

  
  return  <View>
            <View>
              <Pressable
                onPress={() => {
                  setModalVisible("flex");
                }}
              >
                <Text>{item.title}</Text>
              </Pressable>
            </View>
            <SubModal
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              navigation={navigation}
              routeName={routeName}
              subName={item.sub}
              i={i}
              subIndex={subIndex}
            />
            <Separator />
          </View>


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
