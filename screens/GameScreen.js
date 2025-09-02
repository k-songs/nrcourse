import { Text, StyleSheet, View } from "react-native";
import Title from "../components/ui/Title";
import { useState } from "react";
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



function GameScreen({userNumber}) {
    
    const initialGuess = generateRandomBetween(1,100,userNumber)
    const [currentGuess,setCurrentGuess] = useState(initialGuess)

    function nextGuessHandler (direction){
        if(direction === 'lower'){
            generateRandomBetween()
        }
    }

  return (
    <View style={styles.screen}>
      <Title>Opponent's </Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>High or lower?</Text>
        <View>
        <PrimaryButton >+</PrimaryButton>
        <PrimaryButton >-</PrimaryButton>
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
   padding:40,
  },
});
