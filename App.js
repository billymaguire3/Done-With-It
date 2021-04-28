import React from "react";
import { StyleSheet, View } from "react-native";

import AppText from "./src/components/AppText";
import AppButton from "./src/components/AppButton";
import colors from "./src/config/color";
import ViewImageScreen from "./src/screens/ViewImageScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";

export default function App() {
  function handleLoginButtonPress() {
    console.log("login button tapped");
  }

  return (
    // <WelcomeScreen />
    // <ViewImageScreen />
    <View style={styles.container}>
      <AppButton title="login" onPress={handleLoginButtonPress} />
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
