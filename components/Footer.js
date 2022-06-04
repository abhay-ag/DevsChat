import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React, {useState} from "react";
import Icon from "react-native-vector-icons/Ionicons";
import Icon1 from 'react-native-vector-icons/FontAwesome'

export default function Footer() {
  const icons = [
    'ios-home-outline', 'ios-search-outline', 'ios-add-circle-outline',
    'ios-heart-outline', 
  ]
  return (
    <View style={styles.footContainer}>
      {
        icons.map(icon => (
          <Icon name = {icon} size = {30} style = {styles.icons} key = {icon} />
        ))
      }
      <Icon1 name="user-o" size={25} style={styles.icons} />
    </View>
  );
}
const styles = StyleSheet.create({
  footContainer: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "rgb(10,15,20)",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingTop: 15,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  icons: {
    color: "white",
  },
});
