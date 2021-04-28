import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import AppButton from "../components/AppButton";

const backgroundImage = require("../assets/background.jpg");
const logoImage = require("../assets/logo-red.png");

export default function WelcomeScreen() {
  function handleLoginButtonPress() {
    console.log("login button tapped");
  }
  function handleRegisterButtonPress() {
    console.log("register button tapped");
  }

  return (
    <ImageBackground
      blurRadius={10}
      source={backgroundImage}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logoImage} source={logoImage} />
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          color="primary"
          title="login"
          onPress={handleLoginButtonPress}
        />
        <AppButton
          color="secondary"
          title="register"
          onPress={handleRegisterButtonPress}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: 30,
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
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});
