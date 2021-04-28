import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/color";

function AppButton({ color, onPress, title }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderRadius: 25,
    justifyContent: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  buttonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
  },
});

export default AppButton;
