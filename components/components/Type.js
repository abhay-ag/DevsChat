import { View, Text, StyleSheet, TextInput, SafeAreaView } from "react-native";
import React from "react";

export default function Type(props) {
  return (
    <View style={styles.chat}>
      <TextInput
        style={styles.message}
        placeholder={`Type a message @${props.name}`}
        placeholderTextColor={"rgba(255,255,255,0.2)"}
        autoCapitalize = {'none'}
        autoCorrect = {false}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  chat: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: "100%",
},
message: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "rgba(255,255,255,0.1)",
    width: "100%",
    fontSize: 20,
    color: "rgb(255,255,255)",
  },
});
