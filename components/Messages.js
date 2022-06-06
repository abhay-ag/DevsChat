import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "./Header";
import Message from "./components/Message";

export default function Messages() {
  return (
    <View style = {styles.container}>
      <Header showBack={true} />
      <Text style={styles.text}>Messages</Text>
      <Message />
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontWeight: '800',
    color: 'white',
    padding: 5,
    fontSize: 16
  },
  container: {
    backgroundColor: 'rgb(10,15,20)',
    flex: 1
  }
});
