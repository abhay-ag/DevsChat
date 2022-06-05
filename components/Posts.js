import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import React from "react";

const windowWidth = Dimensions.get('window').width;

export default function Posts({userImg, userName}) {
  return (
    <View style={styles.postContainer}>
      <View style={styles.userPost}>
          <Image source={{uri: userImg}} style = {styles.userImg}/>
          <Text style = {styles.userName}>{userName}</Text>
      </View>
      <Image source={{uri: userImg}} style={styles.postImage} />
    </View>
  );
}
const styles = StyleSheet.create({
  postContainer: {},
  postImage: {
    width: windowWidth ,
    height: windowWidth ,
    marginVertical: 5,
  },
  userPost: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center'
  },
  userImg: {
      width: 40,
      height: 40,
      borderRadius: 40/2
  },
  userName: {
      color : 'white',
      paddingHorizontal: 10,
      fontWeight: '600',
      fontSize: 17
  }
});
