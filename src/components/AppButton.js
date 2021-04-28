import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/color";

function AppButton({ color, onPress, title }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: color,
        alignItems: "center",
        borderRadius: 25,
        justifyContent: "center",
        padding: 15,
        width: "100%",
      }}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
  },
});

export default AppButton;
