import React from "react";
import { StyleSheet, View } from "react-native";

import AppText from "./src/components/AppText";
import AppButton from "./src/components/AppButton";
import colors from "./src/config/color";
import ViewImageScreen from "./src/screens/ViewImageScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import Card from "./src/components/Card";
import ListingDetails from "./src/components/ListingDetails";

export default function App() {
  return (
    // <ViewImageScreen />
    // <WelcomeScreen />
    // {/* <Card
    //   title="Red Jacket for sale!"
    //   subtitle="$100"
    //   image={require("./src/assets/jacket.jpg")}
    // /> */}
    <ListingDetails
      image={require("./src/assets/jacket.jpg")}
      title="Red Jacket For Sale!"
      subtitle="$100"
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
