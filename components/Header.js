import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";

export default function Header() {
  return (
    <SafeAreaView style = {styles.mainCont}>
      <View style = {styles.container}>
        <Text style = {styles.heading}>DevChat</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  mainCont: {
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor: 'rgb(10,15,20)'
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(10,15,20)',
    paddingLeft: 10,
    width: '100%'
  },
  heading: {
    fontFamily: 'Dancing_Script',
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold'
  }
})
