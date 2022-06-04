import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function Header() {
  let [fontsLoaded] = useFonts({
      Dancing_Script : require('../assets/fonts/DancingScript.ttf')
  })
  if(!fontsLoaded){
   return <AppLoading />
  }
  return (
    <SafeAreaView>
      <View>
        <Text style = {{fontFamily: 'Dancing_Script'}}>Header</Text>
      </View>
    </SafeAreaView>
  );
}
