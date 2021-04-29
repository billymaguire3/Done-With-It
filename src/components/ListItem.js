import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppText from "./AppText";
import colors from "../config/color";

function ListItem({ image, title, subtitle, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subtitle}>{subtitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 15,
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: colors.medium,
  },
});

export default ListItem;
