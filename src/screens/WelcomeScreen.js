import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const image = require("../../assets/background.jpg");

<script src="http://localhost:8097"></script>;
export default function WelcomeScreen() {
  return (
    <ImageBackground source={image} style={styles.imageContainer}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={require("../../assets/logo-red.png")}
        />
        <Text style={styles.text}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View
          style={{
            backgroundColor: "#fc5c65",
            width: "100%",
            height: 75,
          }}
        />
        <View
          style={{
            backgroundColor: "#4ECDC4",
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
    resizeMode: "cover",
    justifyContent: "center",
  },
  logoContainer: {
    flex: 0.5,
    justifyContent: "center",
    width: "auto",
    height: 20,
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 12,
    textAlign: "center",
  },
  logoImage: {
    width: "85%",
    height: "35%",
    resizeMode: "contain",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
});
