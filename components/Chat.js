import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Header from "./Header";
import Type from "./components/Type";

export default function Chat(props) {
  const { name, userName } = props.route.params
  return (
    <View style = {styles.container}>
      <Header showBack={true} userName = {userName}/>
      <Type name = {userName}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(10,15,20)',
    position: 'relative'
  }
})
