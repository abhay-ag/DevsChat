import { FlatList } from "react-native";
import { data } from "../data/users";
import Posts from "./Posts";
import Profile from "./Profile";
import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import Footer from "./Footer";
import Header from "./Header";

let iterator = 0;

export default function Home(props) {
  const { userName } = props.route.params;
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
  return (
      <View style={styles.container}>
        <Header showChat={true} />
        <FlatList
          data={data}
          renderItem={post}
          keyExtractor={(item) => item.name}
          showsVerticalScrollIndicator={false}
        />
        <Footer user = {userName}/>
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
