import React from 'react';
import {View,Text} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import styles from './style';

const StyledButton =(props) =>{

    const type = props.type;
    const text = props.text;
    const onPressText = props.onPress;
    const backgroundColor = type === 'primary'? 'black' : 'white';
    const TextColor = type === 'primary'? 'white' : 'black';
    return(
        <View style={styles.container}>
            <Pressable 
            style={[styles.button,{backgroundColor: backgroundColor}]}
            onPress={()=> onPressText()}>
                <Text style={[styles.text,{color: TextColor}]}>{text}</Text> 
            </Pressable>
        </View>
    );
};

export default StyledButton;