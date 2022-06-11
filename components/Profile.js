import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";

export default function Profile(props) {
  return (
      <View style={styles.container}>
        <Image
          source={{ uri: `${props.img}` }}
          style={styles.profileImg}
        />
        <Text style={styles.profileText}>{props.currUser ? 'Your Story' : props.name}</Text>
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
    alignItems: "center",
    marginHorizontal: 7,
    maxWidth: 85,
  },
  profileImg: {
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
  },
  profileText: {
    color: "white",
    fontWeight: "700",
    marginTop: 5,
    textAlign: 'center'
  },
});
