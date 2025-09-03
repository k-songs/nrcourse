import { View, Image, StyleSheet ,Text} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/color";



function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
      <Image style={styles.image} source={require('../assets/images/success.png')} />
      </View>
        <Text></Text>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        padding:24,
        justifyContent:'center',
        alignItems:'center'
    },
  imageContainer: {
    borderRadius:150,
    width:300,
    height:300,
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

