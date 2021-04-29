import React from "react";
import { View, Image, StyleSheet } from "react-native";

import colors from "../config/color";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";

function ListingDetailsScreen({ image, title, subtitle }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <View style={styles.titlesContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{subtitle}</AppText>
        </View>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Billy Maguire"
            subtitle="5 listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsContainer: {
    flex: 2,
    backgroundColor: colors.white,
  },
  image: {
    flex: 1,
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
  subtitle: {
    color: colors.secondary,
    fontSize: 24,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  titlesContainer: {
    padding: 20,
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
