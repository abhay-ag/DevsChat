import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";

export default function Type(props) {
  return (
    <View style={styles.chat}>
      <TextInput
        style={styles.message}
        placeholder={`Type a message @${props.name}`}
        placeholderTextColor={"rgba(255,255,255,0.2)"}
        autoCapitalize={"none"}
        autoCorrect={false}
      />
      <TouchableOpacity>
        <Icon
          name="arrowright"
          size={30}
          style={styles.icon}
          onPress={() => {}}
        />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  chat: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  message: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "rgba(255,255,255,0.1)",
    fontSize: 20,
    color: "rgb(255,255,255)",
    flex: 1,
  },
  icon: {
    color: "white",
    paddingHorizontal: 10,
  },
});
