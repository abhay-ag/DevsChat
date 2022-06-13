import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import Icon1 from "react-native-vector-icons/FontAwesome";
import {
  StackActions,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { data } from '../data/users'

let currPic;
export default function Footer(props) {
  const navigation = useNavigation();
  const { name } = useRoute();
  const proPic = async () => {
      data.map((ob) => {
      if(ob.name === props.user){
        currPic = ob.mainPic
      }
    })
  }
  proPic()
  const goToProfile = () => {
    if (name !== "Profile") {
      navigation.dispatch(
        StackActions.replace("Profile", {
          userName: props.user,
          userPic: currPic
        })
      );
    }
  };
  const gotToHome = () => {
    if (name !== "Home") {
      navigation.dispatch(
        StackActions.replace("Home", { userName: props.user })
      );
    }
  };
  return (
    <View style={styles.footContainer}>
      <Icon
        name={"ios-home-outline"}
        size={30}
        style={styles.icons}
        onPress={gotToHome}
      />
      <Icon name={"ios-search-outline"} size={30} style={styles.icons} />
      <Icon name={"ios-add-circle-outline"} size={30} style={styles.icons} />
      <Icon name={"ios-heart-outline"} size={30} style={styles.icons} />
      <Icon1
        name="user-o"
        size={25}
        style={styles.icons}
        onPress={goToProfile}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  footContainer: {
    backgroundColor: "rgb(10,15,20)",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingTop: 15,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
  icons: {
    color: "white",
  },
});
