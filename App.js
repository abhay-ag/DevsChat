import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Footer from "./components/Footer";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";

export default function App() {
  let [fontsLoaded] = useFonts({
    Dancing_Script: require("./assets/fonts/Courgette.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading/>;
  }
  return (
    <View style={styles.container}>
      <Header />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: 'rgb(20,25,30)'
  },
});
