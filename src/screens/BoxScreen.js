import React from 'react';
import { Text, View , StyleSheet} from 'react-native'

const BoxScreen = () => {

    return (
        <View style={styles.viewStyle}>
            <View style={styles.childOneStyle}></View>
            <View style={styles.childTwoStyle}></View>
            <View style={styles.childThreeStyle}></View>

        </View>
    );
};

const styles = StyleSheet.create({
viewStyle:{
    
    borderWidth:3,
    borderColor: 'black',
    height:200,
    flexDirection:'row',
    justifyContent: 'space-between'
    
    
},
childOneStyle:{
    height:50,
    width:50,
    backgroundColor:'purple',
},
childTwoStyle:{
    height:50,
    width:50,
    backgroundColor:'black',
    top: 50
   
},
childThreeStyle:{
    height:50,
    width:50,
    backgroundColor: "blue",
    borderColor: 'red',

}
});

export default BoxScreen;