import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import Footer from "./components/Footer";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import { FlatList } from "react-native";
import { data } from "./data/users";
import Posts from "./components/Posts";
import Profile from "./components/Profile";

let iterator = 0;

export default function App() {
  const profiles = ({ item }) => (
    <Profile key={item.name} name={item.name} img={item.pic} />
  );
  const post = ({ item }) => {
    if (iterator === 0) {
      iterator++;
      return (
        <View>
          <FlatList
            horizontal={true}
            data={data}
            renderItem={profiles}
            keyExtractor={(item) => item.name}
            style={styles.flatList}
            showsHorizontalScrollIndicator={false}
          />
          <Posts
            userImg={item.pic}
            userName={item.name}
            userPosts={item.posts}
          />
        </View>
      );
    } else {
      return (
        <Posts userImg={item.pic} userName={item.name} userPosts={item.posts} />
      );
    }
  };
  let [fontsLoaded] = useFonts({
    Dancing_Script: require("./assets/fonts/Courgette.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={data}
        renderItem={post}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator = {false}
      />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "rgb(10,15,20)",
  },
  flatList: {
    backgroundColor: "rgb(10,15,20)",
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
});
