import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import ColorAdjuster from '../components/ColorAdjuster'

const HomeScreen = ({ navigation }) => {

  return (
    <View>
     <ColorAdjuster color="Red"/>
     <ColorAdjuster color="Green"/>
     <ColorAdjuster color="Blue"/>

    </View>
  );
};


const styles = StyleSheet.create({});

export default HomeScreen;
