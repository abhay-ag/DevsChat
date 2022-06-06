import { View, Text, TextInput, StyleSheet } from 'react-native'
import React from 'react'

export default function Search() {
  return (
    <View style = {styles.container}>
      <TextInput style = {styles.input} placeholder = 'Search' placeholderTextColor={'rgba(255,255,255,0.4)'}/>
    </View>
  )
}
const styles = StyleSheet.create({
    input: {
        borderRadius: 5,
        backgroundColor: 'rgba(255,255,255,0.1)',
        color: 'rgba(255,255,255, 0.4)',
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontSize: 20,
        fontWeight: '600'
    },
    container: {
        paddingHorizontal: 15,
        paddingVertical: 5
    }
})