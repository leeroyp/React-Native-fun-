import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", Age: 20},
    { name: "Friend #2", Age: 45},
    { name: "Friend #3", Age: 32 },
    { name: "Friend #4", Age: 27 },
    { name: "Friend #5", Age: 53},
    { name: "Friend #6", Age: 30 },
    { name: "Friend #7", Age: 29 },
    { name: "Friend #8", Age: 54 },
    { name: "Friend #9", Age: 19 },
    { name: "Friend #10", Age: 21 },
  ];
  return (
  <FlatList 
  keyExtractor={(friend)=> friend.name}
    data={friends} 
    renderItem={({item}) => {
    return <Text style={styles.textStyle}>{item.name}- Age{item.Age}</Text>
    }} 
    />
  );
};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 50
    }
});

export default ListScreen;
