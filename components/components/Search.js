import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { data } from "../../data/users";


export default function Search({ setMess, setRes }) {
  const handleChange = (text) => {
    const inputVal = text.nativeEvent.text;
    if(inputVal.length !== 0){
        let filterData = data.filter(ob => {
            if (ob.name.startsWith(inputVal) || ob.rName.startsWith(inputVal)){
                return ob
            }
        })
        if(filterData.length === 0){
            setRes(true)
        }else{
            setRes(false)
        }
        setMess(filterData)
    }else{
        setMess(data)
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor={"rgba(255,255,255,0.4)"}
        onChange={handleChange}
        autoCapitalize = {"none"}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    borderRadius: 5,
    backgroundColor: "rgba(255,255,255,0.1)",
    color: "rgba(255,255,255, 0.4)",
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 20,
    fontWeight: "600",
  },
  container: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});
