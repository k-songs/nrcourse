import { Text, StyleSheet, View ,Alert} from "react-native";
import Title from "../components/ui/Title";
import { useState,useEffect } from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);


  useEffect(() => {
    if(currentGuess === userNumber){
      Alert.alert("You won!", "Congratulations!", [{text: "Okay", style: "cancel"}]);
      onGameOver();
    } 
  }, [userNumber,currentGuess,onGameOver]);

  function nextGuessHandler(direction) {      
    if((direction === "lower" && currentGuess < userNumber) || (direction === "greater" && currentGuess > userNumber)){
      Alert.alert("Don't lie!", "You know that this is wrong...", [{text: "Sorry!", style: "cancel"}]);
      return;
    }
    
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
      console.log(minBoundary, maxBoundary);
      const newRndNum = generateRandomBetween(
        minBoundary,
        maxBoundary,
        currentGuess
      );
      setCurrentGuess(newRndNum);
    }
  

  return (
    <View style={styles.screen}>
      <Title>Opponent's </Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>High or lower?</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>-</PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>+</PrimaryButton>
        </View>
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
}
export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 40,
  },
});
