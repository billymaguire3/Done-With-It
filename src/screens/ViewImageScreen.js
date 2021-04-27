import React from "react";
import { Image, View, StyleSheet, SafeAreaView } from "react-native";

const image = require("../assets/chair.jpg");

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image source={image} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    backgroundColor: "#fc5c65",
    width: 50,
    height: 50,
    position: "absolute",
    top: 40,
    left: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  deleteIcon: {
    backgroundColor: "#4ECDC4",
    width: 50,
    height: 50,
    position: "absolute",
    right: 30,
    top: 40,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
