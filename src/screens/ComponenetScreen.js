import react from "react";
import { Text, StyleSheet, View } from "react-native";
import { ColorSpace } from "react-native-reanimated";
import { Colors } from "react-native/Libraries/NewAppScreen";

const ComponentScreen = () => {
    const name = "Newton"
    return <View>
        {/* <Text style = {{fontSize: 45 }}>This is my first text view in react native !!</Text>
        <Text style = {{fontSize: 20}}>My name is {name}</Text> */}
        <Text style = {customStyle.textStyle}>This is my first text view in react native !!</Text>
        <Text style = {customStyle.textStyleName}>My name is {name} !!</Text>
      </View>
}

const customStyle = StyleSheet.create( {
   textStyle: {
     fontSize: 45
   },
   textStyleName: {
    fontSize: 20,
    borderWidth: 10,
    borderColor: '#FFFFFF'
   }
})

export default ComponentScreen


