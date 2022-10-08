import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SelectAccount = () => {
  return (
    <View style={styles.root}>
      <View style={styles.card}>
        <Text style={styles.name}>Altın Hesabım</Text>
      </View>
    </View>
  )
}

export default SelectAccount

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#fff"
  },
  card: {
    backgroundColor: "#F9A643",
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 10,
    elevation: 5,
    width: "90%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  name: {
    fontFamily: 'Poppins',
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff"
  }
})