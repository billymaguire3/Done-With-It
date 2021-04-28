import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import colors from "../config/color";

function AppButton({ color, onPress, title }) {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    width: "100%",
    padding: 15,
  },
  buttonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
  },
});

export default AppButton;
