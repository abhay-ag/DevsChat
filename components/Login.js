import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert
} from "react-native";
import React, { useState } from "react";
import { data } from "../data/users";
import { useNavigation } from "@react-navigation/native";

let users = [];
const getUsers = async () => {
  users = data.map((ob) => ob.name);
};
getUsers();
export default function Login() {
  const navigation = useNavigation()
  const [val, setVal] = useState("");
  const pressHandler = () => {
    if(users.indexOf(val) === -1){
        Alert.alert('Error','No such User Exists', {text: 'OK'})
        setVal('')
    }else{
        navigation.navigate('Home', {
          userName: val
        })
    }
  };
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
          onChange={(e) => setVal(e.nativeEvent.text)}
          autoCapitalize={"none"}
          autoCorrect={false}
          value = {val}
        />
        <TouchableOpacity style={styles.cusBut} onPress={pressHandler}>
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
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,0.1)",
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: "700",
    color: "white",
    width: "100%",
  },
  text: {
    fontFamily: "Dancing_Script",
    color: "white",
    fontSize: 50,
    marginBottom: 25,
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
    fontSize: 23,
    textAlign: "center",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  cusBut: {
    backgroundColor: "#3b82f6",
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 10,
  },
});
