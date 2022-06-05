import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Footer from "./components/Footer";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import { FlatList } from "react-native";
import { data } from "./data/users";
import Posts from "./components/Posts";

export default function App() {
  const post = ({item}) => (
    <Posts userImg={item.pic} userName = {item.name}/>
  )
  let [fontsLoaded] = useFonts({
    Dancing_Script: require("./assets/fonts/Courgette.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading/>;
  }
  return (
    <View style={styles.container}>
      <Header />
      <FlatList 
        data={data}
        renderItem = {post}
        keyExtractor = {item => item.name}
      />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: 'rgb(10,15,20)'
  },
});
