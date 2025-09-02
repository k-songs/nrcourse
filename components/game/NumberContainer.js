import {Text,View,StyleSheet} from 'react-native'
import Colors from '../../constants/color' 


function NumberContainer ({children}){
 return(
    <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
 )

}

export default NumberContainer;

const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:Colors.accent500,
        padding:24,
        borderRadius:8,
        margin:24,
        justifyContent:'center',
        alignItems:'center',
    },
    numberText:{
        color:Colors.accent500,
        fontWeight:'bold',
        fontSize:36
    }
    })