import { View, Text } from "react-native";
import React from "react";

export default function UserProfile(props) {
  const { user } = props.route.params;
  return (
    <View>
      <Text>{user}</Text>
    </View>
  );
}
