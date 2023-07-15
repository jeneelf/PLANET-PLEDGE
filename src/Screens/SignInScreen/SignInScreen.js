import React, {useState} from "react";
import { View, Text, Image, StyleSheet, ScrollView} from "react-native";
import Logo from '../../../assets/images/mainlogo.png';
import CustomInput from "../../Components/CustomInput/CustomInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";


const SignInScreen = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation();


    const onSignInPressed =()=>{
        console.warn("Sign In");
        navigation.navigate('HomeScreen')
    
    }
    const onForgotPasswordPressed =()=>{console.warn("Forgot Password")}
    const onSignInFacebook =()=>{console.warn("Facebook Sign In")}
    const onSignInGoogle =()=>{console.warn("Google Sign In")}

    const onSignUpPressed =()=>{
        console.warn("Sign Up");
        navigation.navigate('SignUp')
    }
   
    return(
        <ScrollView>
        <View style ={styles.container}>
            <Image source={Logo} style={styles.logo}/>

            <CustomInput 
            placeholder={"Username"} 
            value={username} 
            setValue={setUsername}/>

            <CustomInput 
            placeholder={"Password"} 
            value={password} 
            setValue={setPassword}/>

            <CustomButton text="Sign In" onPress={onSignInPressed} type="PRIMARY"/>
            <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type= "TERTIARY"/>

            <CustomButton text="Sign In With Facebook" 
            onPress={onSignInFacebook} 
            type="PRIMARY"
            bgColor='#e7eaf4'
            fgColor='#4765A9'/>

            <CustomButton text="Sign In With Google" 
            onPress={onSignInGoogle} 
            type="PRIMARY"
            bgColor='#fae9ea'
            fgColor='#dd4d44'/>

            <CustomButton text="Don't have an account? Sign Up!" onPress={onSignUpPressed} type= "TERTIARY"/>
        </View>
        </ScrollView>
        

    );
};
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        padding: 20,
    
    },
    logo:{
        width: 180,
        height: 180,
    },
});
export default SignInScreen