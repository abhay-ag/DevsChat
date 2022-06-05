import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function Profile() {
  return (
    <View style={styles.profile}>
      <View style={styles.container}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/50.jpg" }}
          style={styles.profileImg}
        />
        <Text style={styles.profileText}>Your Story</Text>
      </View>
      <View style={styles.container}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/men/50.jpg" }}
          style={styles.profileImg}
        />
        <Text style={styles.profileText}>Your Story</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  profile: {
    flexDirection: "row",
    flexWrap: "nowrap",
    paddingHorizontal: 5,
    backgroundColor: "rgb(20,25,30)",
  },
  container: {
    marginTop: 5,
    alignItems: "center",
    marginHorizontal: 5,
  },
  profileImg: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
  profileText: {
    color: "white",
    fontWeight: "700",
    marginTop: 5,
  },
});
