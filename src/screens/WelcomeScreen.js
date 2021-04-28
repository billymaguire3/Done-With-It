import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import AppButton from "../components/AppButton";
import colors from "../config/color";

const backgroundImage = require("../assets/background.jpg");
const logoImage = require("../assets/logo-red.png");

export default function WelcomeScreen() {
  function handleLoginButtonPress() {
    console.log("login button tapped");
  }

  return (
    <ImageBackground
      blurRadius={5}
      source={backgroundImage}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logoImage} source={logoImage} />
        <Text style={styles.text}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          color={colors.primary}
          title="login"
          onPress={handleLoginButtonPress}
        />
        <AppButton
          color={colors.secondary}
          title="register"
          onPress={handleLoginButtonPress}
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
    flex: 0.2,
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
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
  text: {
    fontSize: 22,
    fontWeight: "bold",
    paddingTop: 10,
  },
});
