import React from "react";
import { Text, StyleSheet, View, Image, } from "react-native";
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
 
  return <View>
      <ImageDetail 
        title="Forest" 
        score={5}
        imageSource={require('../../assets/forest.jpg')}
        />
      <ImageDetail 
        title="Beach"
        score={9} 
        imageSource={require('../../assets/beach.jpg')}
        />
      <ImageDetail 
        title="Mountain" 
        score={4}
        imageSource={require('../../assets/mountain.jpg')}
        />
      
  </View>
  
};

const styles = StyleSheet.create({
    
});

export default ImageScreen;
