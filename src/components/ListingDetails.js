import React from "react";
import { View, Image, StyleSheet } from "react-native";

import colors from "../config/color";
import AppText from "./AppText";

function ListingDetails({ image, title, subtitle }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.details}>
        <View style={styles.titlesContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{subtitle}</AppText>
        </View>
        <View style={styles.othersContainer}>
          <Image
            style={styles.othersImage}
            source={require("../assets/mosh.jpg")}
          />
          <View style={styles.othersTextContainer}>
            <AppText style={styles.othersTitle}>Billy Maguire</AppText>
            <AppText style={styles.othersSubtitle}>5 listings</AppText>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  details: {
    flex: 2,
    backgroundColor: colors.white,
  },
  image: {
    flex: 1,
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
  othersContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: colors.white,
    marginHorizontal: 15,
  },
  othersImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginHorizontal: 15,
  },
  othersTextContainer: {
    backgroundColor: colors.white,
    justifyContent: "flex-start",
  },
  othersTitle: {
    fontSize: 14,
    fontWeight: "bold",
  },
  othersSubtitle: {
    fontSize: 12,
    fontWeight: "300",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingBottom: 5,
  },
  titlesContainer: {
    padding: 20,
  },
  subtitle: {
    color: colors.secondary,
    fontSize: 24,
    fontWeight: "bold",
    paddingTop: 5,
  },
});

export default ListingDetails;
