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
import { useSafeAreaFrame } from "react-native-safe-area-context";
import ContentItem from "./ContentItem";

export default function Modal({
  modalVisible,
  setModalVisible,
  quest,
  navigation,
  routeName,
  subIndex,
  subName,
  i,
}) {
  const { width, height } = useSafeAreaFrame();
  console.log(subName);
  return (
    <Mod
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}
    >
      <View
        style={{
          position: "absolute",
          height: 500,
          width: 150,
          backgroundColor: "green",
          top: 100,
        }}
      >
        <Text>tr</Text>
      </View>
      <View style={styles.centeredView}>
        <View style={[styles.modalView, { height: height - 90 }]}>
          {quest ? (
            <View style={styles.modalText}>
              <Text>Hello World!</Text>
            </View>
          ) : (
            <ScrollView
              style={{
                flex: 1,
                height: 500,
                backgroundColor: "#e7e8e7",
              }}
            >
              {subIndex.map((item, id) => (
                <View style={{flex: 1}}>
                <Text>fg</Text>
                <ContentItem
                  item={item}
                  i={i}
                  id={id}
                  subName={subName}
                  routeName={routeName}
                  navigation={navigation}
                  key={id}
                />
                </View>
              ))}
            </ScrollView>
          )}
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
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
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    alignSelf: "stretch",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#5C5F66",
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
  },
});
