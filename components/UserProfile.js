import { View, Text, StyleSheet, StatusBar, SafeAreaView, Image } from "react-native";
import React from "react";
import Footer from "./Footer";
import Icon from 'react-native-vector-icons/AntDesign'
import { StackActions, useNavigation } from "@react-navigation/native";

export default function UserProfile(props) {
  const navigation = useNavigation();

  const logout = () => {
    navigation.dispatch(
      StackActions.replace(
        'Login'
      )
    )
  }
  const { userName, userPic } = props.route.params;
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={"rgb(10,15,20)"} />
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.uName}>{userName}</Text>
          <Icon name="logout" size={25} style = {styles.icon} onPress = {logout} />
        </View>
      </SafeAreaView>
      <View style={styles.view}>
        <Image style = {styles.profilePic} source = {{uri: userPic}}/>
      </View>
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
    paddingVertical: 10,
    justifyContent: 'space-between'
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
  profilePic: {
    width: 100,
    height: 100,
  }
});
