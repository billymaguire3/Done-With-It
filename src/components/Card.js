import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

import colors from "../config/color";

function Card({ title, subtitle, image }) {
  return (
    <View style={styles.background}>
      <View style={styles.itemContainer}>
        <Image style={styles.image} source={image} />
        <View style={styles.textContainer}>
          <Text style={styles.titles}>{title}</Text>
          <Text style={[styles.titles, { color: colors.secondary }]}>
            {subtitle}
          </Text>
        </View>
      </View>
      <View style={styles.whiteContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
    backgroundColor: "#f8f4f4",
    alignItems: "center",
  },
  image: {
    flex: 2,
    width: "100%",
    height: "100%",
    resizeMode: "center",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  itemContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    marginTop: 100,
    width: "80%",
    height: "35%",
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 10,
    marginVertical: 20,
  },
  titles: {
    fontWeight: "600",
    fontSize: 16,
    padding: 5,
  },
  whiteContainer: {
    flex: 2,
    backgroundColor: colors.white,
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    marginTop: 20,
  },
});

export default Card;
