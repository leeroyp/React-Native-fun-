import React, { Component } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Helo Leeroy</Text>
      <Button
        onPress={() =>navigation.navigate("Component")}
        title="Go to Components Demo"
      />
       <Button
        onPress={() =>navigation.navigate("List")}
        title="Go to Components List"
      />
      <Button
        onPress={() =>navigation.navigate("Image")}
        title="Go to Components Image Screen"
      />
       <Button
        onPress={() =>navigation.navigate("Counter")}
        title="Go to Components Counter"
      /><Button
      onPress={() =>navigation.navigate("Color")}
      title="Go to Components Color"
    />
     
    
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
