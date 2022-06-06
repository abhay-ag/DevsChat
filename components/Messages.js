import { View, Text, StyleSheet, FlatList } from "react-native";
import React, {useState} from "react";
import Header from "./Header";
import Message from "./components/Message";
import { data } from "../data/users";

export default function Messages() {
  const [mess, setMess] = useState(data)
  const renderMessages = ({item}) => {
    return <Message name = {item.rName} uname = {item.name} pic = {item.pic}/>;
  }
  return (
    <View style = {styles.container}>
      <Header showBack={true} />
      <Text style={styles.text}>Messages</Text>
      <FlatList 
        data={mess}
        renderItem = {renderMessages}
        keyExtractor = {mess => mess.name}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    fontWeight: '800',
    color: 'white',
    padding: 5,
    fontSize: 16
  },
  container: {
    backgroundColor: 'rgb(10,15,20)',
    flex: 1
  }
});
