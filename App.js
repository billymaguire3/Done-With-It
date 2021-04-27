import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import ViewImageScreen from "./src/screens/ViewImageScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";

export default function App() {
  return (
    <WelcomeScreen />
    // {/* <ViewImageScreen /> */}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
