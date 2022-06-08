import { View, Text } from "react-native";
import React from "react";
import Header from "./Header";

export default function Chat(props) {
  const { name, userName } = props.route.params
  return (
    <View>
      <Header showBack={true} userName = {userName}/>
    </View>
  );
}
