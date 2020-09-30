import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
  const name = "Leeroy Phili";
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native</Text>
      <Text style={styles.text2}>My name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  text2:{
      fontSize:20
  }
});

export default ComponentScreen;
