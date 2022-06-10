import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import Icon1 from "react-native-vector-icons/FontAwesome";

export default function Footer() {
  return (
    <View style={styles.footContainer}>
      <Icon name={"ios-home-outline"} size={30} style={styles.icons} />
      <Icon name={"ios-search-outline"} size={30} style={styles.icons} />
      <Icon name={"ios-add-circle-outline"} size={30} style={styles.icons} />
      <Icon name={"ios-heart-outline"} size={30} style={styles.icons} />
      <Icon1 name="user-o" size={25} style={styles.icons} />
    </View>
  );
}
const styles = StyleSheet.create({
  footContainer: {
    backgroundColor: "rgb(10,15,20)",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingTop: 15,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
  icons: {
    color: "white",
  },
});
