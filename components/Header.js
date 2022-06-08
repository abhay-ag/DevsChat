import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function Header({ showChat, showBack, userName }) {
  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.navigate("Messages");
  };

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.mainCont}>
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={"rgb(10,15,20)"} />
        {showBack && (
          <TouchableOpacity>
            <Icon
              name="arrow-back"
              size={30}
              style={styles.icon}
              onPress={goBack}
            />
          </TouchableOpacity>
        )}
        <Text style={styles.heading}>{userName}</Text>
        {showChat && (
          <TouchableOpacity>
            <Icon
              name="chatbubbles-outline"
              size={30}
              style={styles.icon}
              onPress={onPressHandler}
            />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}
Header.defaultProps = {
  userName : 'DevsChat'
}
const styles = StyleSheet.create({
  mainCont: {
    width: "100%",
    backgroundColor: "rgb(10,15,20)",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgb(10,15,20)",
    paddingHorizontal: 10,
    paddingVertical: 7,
    width: "100%",
  },
  heading: {
    fontFamily: "Dancing_Script",
    fontSize: 35,
    color: "white",
  },
  icon: {
    color: "white",
  },
  profile: {
    flexDirection: "row",
    backgroundColor: "rgb(10,15,20)",
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderColor: "rgba(255,255,255,0.1)",
  },
  scrollCont: {},
});
