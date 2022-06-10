import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import Footer from "./Footer";

export default function UserProfile(props) {
  const { userName } = props.route.params;
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={"rgb(10,15,20)"} />
      <View style={styles.view}>
        <Text>{userName}</Text>
      </View>
      <Footer user={userName} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(10,15,20)",
  },
  view: {
    flex: 1,
  },
});
