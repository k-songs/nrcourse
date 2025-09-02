import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { StyleSheet, ImageBackground,SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {useState} from 'react'
import Colors from "./constants/color";


export default function App() {

  const [userNumber,setUserNumber] =useState()

function pickNumberHandler (pickedNumber){
  setUserNumber(pickedNumber)
}

let screen = <StartGameScreen onPickNumber={pickNumberHandler}/>
if(userNumber){
  screen= <GameScreen userNumber={userNumber}/>
}
  return (
    <LinearGradient colors={[Colors.primary700,  Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/brSound.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>
        {screen}
        </SafeAreaView>
 
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
