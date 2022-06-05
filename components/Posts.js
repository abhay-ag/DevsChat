import { View, Text, StyleSheet, Image, Dimensions, FlatList } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon1 from 'react-native-vector-icons/Octicons'
import Icon2 from 'react-native-vector-icons/Feather'

const windowWidth = Dimensions.get("window").width;

export default function Posts({ userImg, userName, userPosts }) {
  const renderPosts = ({ item }) => (
    <Image source={{uri : item}} style = {styles.postImage}/>
  )
  return (
    <View style={styles.postContainer}>
      <View style={styles.userPost}>
        <Image source={{ uri: userImg }} style={styles.userImg} />
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <FlatList 
        data={userPosts}
        renderItem = {renderPosts}
        keyExtractor = {item => item}
        horizontal = {true}
        decelerationRate={0}
        snapToInterval={windowWidth}
        snapToAlignment={"center"}
      />
      <View style={styles.interaction}>
        <Icon name="heart" size={24} style={styles.icons} />
        <Icon1 name="comment" size={24} style = {styles.icons}/>
        <Icon2 name="send" size={24} style = {styles.icons}/>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  postContainer: {
    marginVertical: 5,
  },
  postImage: {
    width: windowWidth,
    height: windowWidth,
    marginVertical: 5,
  },
  userPost: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "center",
  },
  userImg: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
  userName: {
    color: "white",
    paddingHorizontal: 10,
    fontWeight: "600",
    fontSize: 17,
  },
  icons: {
    color: 'white',
    marginHorizontal: 8,
    marginVertical: 6
  },
  interaction: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});
