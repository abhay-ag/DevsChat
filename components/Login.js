import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { data } from "../data/users";

export default function Login() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Text style={styles.text}>DevsChat</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter user name"
          placeholderTextColor={"rgba(255,255,255,0.16)"}
        />
        <TouchableOpacity style={styles.cusBut}>
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "rgb(10,15,20)",
    flexDirection: "row",
  },
  input: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.1)",
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: "700",
    color: "white",
  },
  text: {
    fontFamily: "Dancing_Script",
    color: "white",
    fontSize: 50,
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    color: "white",
    fontWeight: "700",
    backgroundColor: "#3b82f6",
    fontSize: 23,
    textAlign: "center",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  cusBut: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 10,
  },
});
