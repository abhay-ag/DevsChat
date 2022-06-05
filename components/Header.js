import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

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
    borderBottomWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  heading: {
    fontFamily: "Dancing_Script",
    fontSize: 35,
    color: "white",
  },
  icon: {
    color: "white",
  },
});
