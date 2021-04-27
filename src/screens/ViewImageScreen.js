import React from "react";
import { Image, View, StyleSheet, SafeAreaView } from "react-native";

const image = require("../../assets/chair.jpg");

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={[styles.button, styles.buttonLeft]} />
        <View style={[styles.button, styles.buttonRight]} />
        <Image source={image} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  button: {
    width: 50,
    height: 50,
    position: "absolute",
  },
  buttonLeft: {
    backgroundColor: "#fc5c65",
    left: 25,
    top: 40,
  },
  buttonRight: {
    backgroundColor: "#4ECDC4",
    right: 25,
    top: 40,
  },
  image: {
    width: "100%",
    height: "auto",
    resizeMode: "contain",
  },
});
