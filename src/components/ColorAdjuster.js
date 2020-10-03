import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ColorAdjuster = ({color}) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} />
      <Button title={`Decrease ${color}`} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorAdjuster;