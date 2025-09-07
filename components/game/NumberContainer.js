import {Text,View,StyleSheet,Dimensions} from 'react-native'
import Colors from '../../constants/color' 


function NumberContainer ({children}){
 return(
    <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
 )

}

export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

    console.log(deviceWidth);

const styles = StyleSheet.create({
    container:{
        borderWidth:4,
        borderColor:Colors.accent500,
        padding:deviceWidth < 380 ? 12 : 24,
        borderRadius:8,
        margin:deviceWidth < 380 ? 12 : 24,
        justifyContent:'center',
        alignItems:'center',
        marginTop: 40,
        
    },
    numberText:{
        fontFamily:'open-sans-bold',
        color:Colors.accent500,
       // fontWeight:'bold',
        fontSize:deviceWidth < 380 ? 28 : 36
    }
    })