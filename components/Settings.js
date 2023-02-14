import { useContext } from "react";
import { StyleSheet, View, Pressable } from "react-native";
import SvgButton from "./SvgButton";
import { useTheme } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Context } from './Context'

export default function Settings({
  navigation,
  onPress,
  modalVisible,
  setModalVisible,
  changeTheme,
}) {
  const { settings, setSettings } = useContext(Context)
  const { colors } = useTheme();
  
 const saveSettings = async (n) => {
    const str = JSON.stringify(n)
    await AsyncStorage.setItem('settings', str)
  }
  
  const utilFun = (n) => {
        setSettings(n)
        saveSettings(n)
  }
  
  const incrFont = () => {
        for (const key in settings.fontSizes) {
          settings.fontSizes[key] += 0.5
        }
        utilFun({...settings})
  }
  
  const decrFont = () => {
        for (const key in settings.fontSizes) {
          settings.fontSizes[key] -= 0.5
        }
        utilFun({...settings})
  }
  
  return (
    <View style={[styles.container, { display: modalVisible }]}>
      <Pressable
        style={{
          flex: 1,
          backgroundColor: "red",
        }}
        onPress={() => setModalVisible("none")}
      />
      <View style={[styles.header, { backgroundColor: colors.card }]}>
        <SvgButton size={24} name="mod" onPress={changeTheme} />
        <SvgButton size={24} name="zoomIn"  onPress={incrFont}/>
        <SvgButton size={24} name="zoomOut"  onPress={decrFont}/>        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 60,
    right: 10,
  },
  header: {
    flexDirection: "row",
   justifyContent: "space-around",
    height: 45,
    width: 150,
  },
  name: {
    fontSize: 16,
  },
});
