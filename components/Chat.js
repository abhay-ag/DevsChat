import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "./Header";
import Type from "./components/Type";
import { KeyboardAvoidingView } from "react-native";

export default function Chat(props) {
  const { name, userName } = props.route.params;
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Header showBack={true} userName={userName} />
      <View style={styles.innerContainer}>
        <View style={styles.chatContainer}></View>
        <Type name={userName} />
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(10,15,20)",
    position: "relative",
  },
  chatContainer: {
    flex: 1,
  },
  innerContainer: {
    paddingBottom: 15,
    flex: 1,
  },
});
