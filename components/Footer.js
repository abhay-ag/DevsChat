import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon1 from 'react-native-vector-icons/Ionicons'

export default function Footer() {
  return (
    <View style={styles.footContainer}>
      <Icon name="home" size={30} style={styles.icons} />
      <Icon name="account-search" size={30} style={styles.icons} />
      <Icon1 name="ios-add-circle-sharp" size={30} style={styles.icons} />
      <Icon name="contactless-payment-circle" size={30} style={styles.icons} />
      <Icon name="contactless-payment-circle" size={30} style={styles.icons} />
    </View>
  );
}
const styles = StyleSheet.create({
  footContainer: {
    position: "absolute",
    bottom: 0,
    height: 70,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingTop: 15
  },
  icons: {
    color: "white",
  },
});
