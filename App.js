import React from "react";
import { StyleSheet, View } from "react-native";

import AppText from "./src/components/AppText";
import AppButton from "./src/components/AppButton";
import colors from "./src/config/color";
import ViewImageScreen from "./src/screens/ViewImageScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import Card from "./src/components/Card";

export default function App() {
  return (
    // <ViewImageScreen />
    // <WelcomeScreen />
    <View
      style={{
        backgroundColor: "#f8f4f4",
        padding: 20,
        paddingTop: 100,
      }}
    >
      <Card
        title="Red Jacket for sale!"
        subtitle="$100"
        image={require("./src/assets/jacket.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
