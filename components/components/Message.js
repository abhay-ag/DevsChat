import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function Message(props) {
  return (
    <View style={styles.messageContainer}>
      <Image
        source={{ uri: props.pic }}
        style={styles.profileImg}
      />
      <View style={styles.names}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.userName}>{props.uname}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  messageContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    backgroundColor: "rgb(10,15,20)",
    alignItems: "center",
  },
  profileImg: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
  },
  name: {
      fontWeight: '700',
      fontSize: 20,
      color: 'white'
  },
  userName: {
      fontSize: 13,
      color: 'rgba(255,255,255,0.7)'
  },
  names: {
      marginLeft: 10
  },
});
