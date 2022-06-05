import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import Profile from "./Profile";
import { data } from "../data/users.js";

export default function Header() {
  return (
    <SafeAreaView style={styles.mainCont}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={'rgb(10,15,20)'}/>
        <Text style={styles.heading}>DevsChat</Text>
        <TouchableOpacity>
          <Icon name="chatbubbles-outline" size={30} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.profile} contentContainerStyle={{flexDirection:'row'}} horizontal = {true} showsHorizontalScrollIndicator = {false}>
      {
        data.map(user => (
          <Profile key = {user.name} name = {user.name} img = {user.pic}/>
        ))
      }
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainCont: {
    position: "absolute",
    top: 0,
    width: "100%",
    backgroundColor: "rgb(10,15,20)",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgb(10,15,20)",
    paddingHorizontal: 10,
    paddingVertical: 7,
    width: "100%",
  },
  heading: {
    fontFamily: "Dancing_Script",
    fontSize: 35,
    color: "white",
  },
  icon: {
    color: "white",
  },profile: {
    flexDirection: "row",
    backgroundColor: "rgb(20,25,30)",
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
});
