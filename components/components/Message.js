import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function Message() {
  return (
    <View style={styles.messageContainer}>
      <Image
        source={{ uri: "https://randomuser.me/api/portraits/men/2.jpg" }}
        style={styles.profileImg}
      />
      <View style={styles.names}>
        <Text style={styles.name}>Vaibhav Singh</Text>
        <Text style={styles.userName}>v0nser</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  messageContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    flexDirection: "row",
    backgroundColor: "rgb(10,15,20)",
    alignItems: "center",
    borderBottomWidth: 0.3,

    borderColor: 'rgba(255,255,255,0.3)'
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
