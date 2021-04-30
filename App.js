import React from "react";
import { StyleSheet, View, SafeAreaView } from "react-native";

import AppText from "./src/components/AppText";
import AppButton from "./src/components/AppButton";
import colors from "./src/config/color";
import ViewImageScreen from "./src/screens/ViewImageScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import Card from "./src/components/Card";
import ListingDetailsScreen from "./src/screens/ListingDetailsScreen";
import MessageScreen from "./src/screens/MessageScreen";
import ListItem from "./src/components/ListItem";
import Screen from "./src/components/Screen";
import MyAccountScreen from "./src/screens/MyAccountScreen";

export default function App() {
  return (
    <MyAccountScreen
      name="Billy Maguire"
      email="billymaguire3@gmail.com"
      image={require("./src/assets/billy.jpg")}
    />
  );
}

const styles = StyleSheet.create({});
