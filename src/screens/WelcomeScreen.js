import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const backgroundImage = require("../assets/background.jpg");
const logoImage = require("../assets/logo-red.png");

<script src="http://localhost:8097"></script>;
export default function WelcomeScreen() {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.logoContainer}>
        <Image style={styles.logoImage} source={logoImage} />
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
  },
});
