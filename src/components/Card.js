import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

function Card({ title, subtitle, image }) {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.itemContainer}>
        <Image style={styles.image} source={image} />
        <Text>{title}</Text>
        <Text>{subtitle}</Text>
      </View>
    </SafeAreaView>
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
    width: "100%",
    height: "100%",
    resizeMode: "center",
  },
  itemContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    marginTop: 40,
    width: "80%",
    height: "35%",
  },
});

export default Card;
