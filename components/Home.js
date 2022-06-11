import { FlatList, StatusBar } from "react-native";
import { data } from "../data/users";
import Posts from "./Posts";
import Profile from "./Profile";
import { View, Text } from "react-native";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Footer from "./Footer";
import Header from "./Header";

let iterator = 0;

export default function Home(props) {
  let currUser = [];
  let users = [];
  const { userName } = props.route.params;
  data.filter((ob) => {
    if (ob.name === userName) {
      currUser.push(ob);
    } else {
      users.push(ob);
    }
  });
  const currentUser = ({ item }) => <Profile key={item.name} name={item.name} img={item.pic} currUser = {true}/>
  const profiles = ({ item }) => {
    if(iterator === 0){
      iterator++
      return(
        <View style = {{flexDirection: 'row'}}>
          <FlatList 
            data={currUser}
            renderItem = {currentUser}
            keyExtractor = { (item) => item.name}
            scrollEnabled = {false}
          />
          <Profile key={item.name} name={item.name} img={item.pic} />
        </View>
      )
    }
    return <Profile key={item.name} name={item.name} img={item.pic} />;
  };
  const post = ({ item }) => {
    if (iterator === 0) {
      return (
        <View>
          <FlatList
            horizontal={true}
            data={users}
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
  iterator = 0;
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={"rgb(10,15,20)"} />
      <Header showChat={true} data = {users}/>
      <FlatList
        data={data}
        renderItem={post}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
      />
      <Footer user={userName} />
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
