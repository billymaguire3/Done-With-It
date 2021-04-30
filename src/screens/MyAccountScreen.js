import React from "react";
import { View, FlatList, SafeAreaView, StyleSheet } from "react-native";

import colors from "../config/color";
import ListItem from "../components/ListItem";

function MyAccountScreen({ name, email, image }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.infoContainer}>
        <ListItem
          image={image}
          title={name}
          subtitle={email}
          onPress={() => console.log("Info Tapped")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f4f4",
    flex: 1,
  },
  infoContainer: {
    height: 100,
    width: "100%",
    backgroundColor: colors.white,
  },
});

export default MyAccountScreen;
