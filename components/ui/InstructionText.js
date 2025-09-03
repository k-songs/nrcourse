import {Text,StyleSheet} from 'react-native'
import Colors from '../../constants/color'


function InstruntionText ({children,style}){
    return    <Text style={[styles.instructionText,style]}>{children}</Text>
}
export default InstruntionText;


const styles =StyleSheet.create({
    instructionText: {
        fontFamily:'open-sans',
        fontSize: 24,
        color: Colors.accent500,
      },
})