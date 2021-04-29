import React from "react";
import { Image, View, StyleSheet, SafeAreaView } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";

import colors from "../config/color";

const image = require("../assets/chair.jpg");

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <Feather
        style={styles.closeIcon}
        name="x"
        size={35}
        color={colors.white}
      />
      <AntDesign
        style={styles.deleteIcon}
        name="delete"
        size={35}
        color={colors.white}
      />
      <Image source={image} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 50,
    left: 30,
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  deleteIcon: {
    position: "absolute",
    right: 30,
    top: 50,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
