import { View, Image, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/color";



function GameOverScreen() {
  return (
    <View>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
      <Image style={styles.image} source={require('../assets/images/success.png')} />
      </View>
    
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius:200,
    width:400,
    height:400,
    borderWidth:3,
    borderColor:Colors.primary800,
    overflow:'hidden',
    margin:36
  },
  image:{
    width:'100%',
    height:'100%'
  }
});
/* 웹은 경고창이 나오지 않음 */

