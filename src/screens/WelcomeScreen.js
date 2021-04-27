import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = require("../../assets/background.jpg");

export default function WelcomeScreen() {
  return (
    <ImageBackground source={image} style={styles.imageContainer}>
      <View style={styles.buttonContainer}>
        <View
          style={{
            backgroundColor: "tomato",
            width: "100%",
            height: 75,
          }}
        />
        <View
          style={{
            backgroundColor: "teal",
            width: "100%",
            height: 75,
          }}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    flexDirection: "column",
    resizeMode: "cover",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
});
