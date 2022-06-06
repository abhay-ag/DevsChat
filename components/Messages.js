import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";
import Header from "./Header";
import Message from "./components/Message";
import { data } from "../data/users";
import Search from "./components/Search";

export default function Messages() {
  const [mess, setMess] = useState(data);
  const [res, setRes] = useState(false);
  const renderMessages = ({ item }) => {
    return <Message name={item.rName} uname={item.name} pic={item.pic} />;
  };
  return (
    <View style={styles.container}>
      <Header showBack={true} />
      <Search setMess={setMess} setRes={setRes} />
      <Text style={styles.text}>Messages</Text>
      {
        res === false ? <FlatList
          data={mess}
          renderItem={renderMessages}
          keyExtractor={(mess) => mess.name}
        /> : <Text>No result found</Text>
      }
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontWeight: "800",
    color: "white",
    padding: 5,
    fontSize: 16,
  },
  container: {
    backgroundColor: "rgb(10,15,20)",
    flex: 1,
  },
});
