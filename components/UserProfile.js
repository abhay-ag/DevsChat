import { View, Text, StyleSheet, StatusBar, SafeAreaView } from "react-native";
import React from "react";
import Footer from "./Footer";
import Icon from "react-native-vector-icons/FontAwesome";

export default function UserProfile(props) {
  const { userName } = props.route.params;
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={"rgb(10,15,20)"} />
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.uName}>{userName}</Text>
          <Icon name="angle-down" size={30} style={styles.icon} />
        </View>
      </SafeAreaView>
      <View style={styles.view}></View>
      <Footer user={userName} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(10,15,20)",
  },
  view: {
    flex: 1,
  },
  header: {
    marginVertical: 5,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    paddingVertical: 10
  },
  uName: {
    color: "white",
    fontSize: 30,
    fontWeight: "800",
  },
  icon: {
    color: "white",
    marginHorizontal: 20
  },
});
