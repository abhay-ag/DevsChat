import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Footer from "./Footer";

export default function UserProfile(props) {
  const { userName } = props.route.params;
  return (
    <View style={styles.container}>
      <Text>{userName}</Text>
      <Footer user = {userName}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(10,15,20)",
  },
});
