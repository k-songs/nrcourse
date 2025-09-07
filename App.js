import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Colors from "./constants/color";
import GameOverScreen from "./screens/GameOverScreen";
import{StatusBar} from 'expo-status-bar'

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [gameRounds, setGameRounds] = useState(0);
  
  
  function pickNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }
  function gameOverHandler({roundsNumber}) {
    setGameIsOver(true);
    setGameRounds(roundsNumber);
  }

  function startNewGameHandler() {
    setUserNumber(null);
    setGameIsOver(false);
    setGameRounds(0);
  }
  let screen = <StartGameScreen onPickNumber={pickNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen roundsNumber={gameRounds} userNumber={userNumber} onStartNewGame={startNewGameHandler} />;
  }

  return (
    <>
        <StatusBar style="light" />
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
    </>

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
