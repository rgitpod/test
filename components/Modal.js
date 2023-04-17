import React, { useState } from "react";
import {
  Alert,
  Modal as Mod,
  StyleSheet,
  Text,
  Pressable,
  View,
  ScrollView,
} from "react-native";
import { desc } from "./contents/data/description";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import Svg, { Path } from "react-native-svg";

export default function Modal({ modalVisible, setModalVisible, routName }) {
  const { width, height } = useSafeAreaFrame();
  const { colors } = useTheme();

  return (
    <Mod
      animationType="slide"
      transparent={true}
      visible={routName === modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={[styles.modalView, { height: height - 90, backgroundColor: colors.card}]}>
          <View style={styles.modalText}>{desc[routName]}</View>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Svg
              height={50}
              width={50}
              viewBox="0 0 16 16"
              fill={colors.text}
            >
              <Path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </Svg>
          </Pressable>
        </View>
      </View>
    </Mod>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    marginTop: 22,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    flexGrow: 1,
    paddingBottom: 0,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#a3a3a3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    flexGrow: 2,
    marginBottom: 15,
    textAlign: "center",
    padding: 17,
  },
});
