import React, { useCallback } from "react"; // React import 추가
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { StyleSheet, ImageBackground, SafeAreaView ,View} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Colors from "./constants/color";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import  * as SplashScreen from 'expo-splash-screen'


SplashScreen.preventAutoHideAsync();
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

const [fontsLoaded]=useFonts({
  'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
  'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
})

const onLayoutRootView = useCallback(async()=>{
if(fontsLoaded){
  await SplashScreen.hideAsync()
}
},[fontsLoaded])


if(!fontsLoaded){
  return null;
}


  function pickNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
  function gameOverHandler() {
    setGameIsOver(true);
  }


  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen />;
  }

  return (
    <View style={{flex: 1}} onLayout={onLayoutRootView}>
          <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/brSound.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </View>
  
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
