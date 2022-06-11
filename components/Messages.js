import { View, Text, StyleSheet, FlatList, StatusBar } from "react-native";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Message from "./components/Message";
import Search from "./components/Search";

export default function Messages(props) {
  const {data} = props.route.params
  const [mess, setMess] = useState(data);
  const [res, setRes] = useState(false);
  const renderMessages = ({ item }) => {
    return <Message name={item.rName} uname={item.name} pic={item.pic} />;
  };
  useEffect(() => {
    if (mess.length === 0) {
      setRes(true);
    } else {
      setRes(false);
    }
  }, [mess]);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={"rgb(10,15,20)"} />
      <Header showBack={true} />
      <Search setMess={setMess} data = {data}/>
      <Text style={styles.text}>Messages</Text>
      {res === false ? (
        <FlatList
          data={mess}
          renderItem={renderMessages}
          keyExtractor={(mess) => mess.name}
        />
      ) : (
        <Text style={styles.error}>No result found</Text>
      )}
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
  error: {
    color: "white",
    fontWeight: "700",
    textAlign: "center",
    fontSize: 20,
  },
});
