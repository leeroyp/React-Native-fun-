import React, { useReducer } from "react";
import { Text, StyleSheet, View } from "react-native";
import ColorAdjuster from "../components/ColorAdjuster";

const COLOR_INCREMENT = 15;


const reducer = (state, action ) => {
// first argument  (state)=== is always the initial state { red:0, green : 0 , blue: 0 }
// second argument (action)=== is how to change state object { tyoe: change_red || change_green|| change_blue, payload: 15}
switch(action.type){
    case 'change_red':
        return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        :{...state, red: state.red + action.payload};
        // whatever we return, it will be used in our argument as a new state 
    case 'change_green':
        return state.green + action.payload > 255 || state.green+ action.payload < 0
        ? state
        :{...state, green: state.green + action.payload};
    case 'change_blue':
        return state.blue  + action.payload > 255 || state.blue + action.payload < 0
        ?state 
        : {...state, blue: state.blue + action.payload};
    default:

        return state
}
};

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    //state = { red:0, green : 0 , blue: 0 }
    const {red, green , blue} = state;
  return (
    <View>
      <ColorAdjuster
        onIncrease={() => 
            dispatch({type : 'change_red', payload: COLOR_INCREMENT})
         }
        onDecrease={() => 
            dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT}) 
        }
        color="Red"
      />
      <ColorAdjuster
        onIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_green', payload: -1 * COLOR_INCREMENT})}
        color="Green"
      />
      <ColorAdjuster
        onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
        onDecrease={() => dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})}
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
        }}
      />
    </View>  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
