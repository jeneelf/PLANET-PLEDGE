import React from "react";
import { View,Text, StyleSheet, Pressable } from "react-native";

const CustomButton =({onPress, text, type, bgColor, fgColor}) => {
    return(
        <Pressable 
        onPress={onPress}
        style={[styles.container, styles[`container_${type}`],
        bgColor ? {backgroundColor : bgColor} : {},
        ]}> 
            <Text style={[styles.text, styles[`text_${type}`],
        fgColor ? {color:fgColor} : {},
        ]}>
            {text}</Text>
        </Pressable>
//note use of backticks(`) not apostrophe (')
    );
};

const styles =StyleSheet.create({
    container:{
        
        width:'100%',

        padding: 15,
        marginVertical: 5,

        alignItems:'center',
        borderRadius: 5,
    },
    container_PRIMARY:{
        backgroundColor: 'green',
    },

    container_TERTIARY:{},

    text:{
        fontWeight:'bold',
        color: 'white',
    },

    text_TERTIARY:{
        color:'grey',
    },
});
export default CustomButton;