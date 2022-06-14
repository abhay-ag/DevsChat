import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { data } from "../data/users";
import { StackActions, useNavigation } from "@react-navigation/native";

let users = [];
let passwords = [];
const getUsers = async () => {
  users = data.map((ob) => ob.name);
  passwords = data.map((ob) => ob.password);
};
getUsers();
export default function Login() {
  const navigation = useNavigation();
  const [val, setVal] = useState("");
  const [pass, setPass] = useState("");
  const [flag, setFlag] = useState(false);
  const pressHandler = () => {
    if (!flag) {
      if (val !== "") {
        if (users.indexOf(val) === -1) {
          Alert.alert("Error", "No such User Exists", { text: "OK" });
          setVal("");
        } else {
          setFlag(true);
        }
      } else {
        Alert.alert("Warning", "Please Enter a Valid Username", { text: "OK" });
      }
    }else{
      let indexUser = users.indexOf(val);
      if(pass === passwords[indexUser]){
        navigation.dispatch(
          StackActions.replace("Home", {
            userName: val,
          })
        );
      }else{
        Alert.alert("Error", "Incorrect Password", {text: 'OK'})
        setPass('')
      }
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <StatusBar barStyle="light-content" backgroundColor={"rgb(10,15,20)"} />
        <Text style={styles.text}>DevsChat</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter user name"
          placeholderTextColor={"rgba(255,255,255,0.16)"}
          onChange={(e) => setVal(e.nativeEvent.text)}
          autoCapitalize={"none"}
          autoCorrect={false}
          value={val}
          onSubmitEditing = {pressHandler}
          onFocus = {() => {setFlag(false)}}
        />
        {flag && (
          <TextInput
            style={styles.inputPass}
            placeholder="Enter password"
            placeholderTextColor={"rgba(255,255,255,0.16)"}
            onChange={(e) => setPass(e.nativeEvent.text)}
            autoCapitalize={"none"}
            autoCorrect={false}
            value={pass}
            secureTextEntry={true}
            onSubmitEditing = {pressHandler}
          />
        )}
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
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    backgroundColor: "rgba(255,255,255,0.1)",
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: "700",
    color: "white",
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(255,255,255,0.19)",
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
  inputPass: {
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    backgroundColor: "rgba(255,255,255,0.1)",
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: "700",
    color: "white",
    width: "100%",
    marginBottom: 10,
  },
});
