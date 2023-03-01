import { useState } from "react";
import { StyleSheet, View, Pressable, Dimensions } from "react-native";
import Settings from "./Settings";
import SvgButton from "./SvgButton";
import { useTheme } from "@react-navigation/native";
import { useSafeAreaFrame } from "react-native-safe-area-context";

export default function AppFooter({ navigation, route, onPress }) {
  const { colors } = useTheme();
  const { width, height } = useSafeAreaFrame();
  const [opt, setOpt] = useState("none");

  return (
    <View
      style={[
        styles.footer,
        { backgroundColor: colors.card, top: height - 60 },
      ]}
    >
      <View
        style={{
          maxWidth: 500,
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <SvgButton
          size={26}
          name={route.name == "Home" ? "exit" : "back"}
          onPress={() => navigation.goBack()}
        />
        <SvgButton
          size={26}
          name="bookmark"
          onPress={() => navigation.navigate("Bookmark")}
        />
        <SvgButton
          size={26}
          name="search"
          onPress={() => navigation.navigate("Search")}
        />
        <SvgButton
          size={26}
          name="options"
          onPress={() => setOpt(opt == "none" ? "flex" : "none")}
        />
        <Settings
          modalVisible={opt}
          setModalVisible={setOpt}
          changeTheme={onPress}
        />
         <Pressable
        onPressIn={() => setOpt("none")}
        style={{
          position: "absolute",
          zIndex: 1,
        }}
      >
        <View
          style={{
            position: "absolute",
            zIndex: 1,
            display: opt,
            width: width,
            height: height,
            right: -width/2,
            bottom: -50,
          }}
        ></View>
      </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 15,
    paddingBottom: 3,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    position: "absolute",
    width: "100%",
    height: 60,
  },
  name: {
    fontSize: 16,
  },
});
