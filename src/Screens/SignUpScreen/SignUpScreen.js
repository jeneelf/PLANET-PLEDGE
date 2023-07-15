import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import CustomInput from "../../Components/CustomInput";
import CustomButton from "../../Components/CustomButton";
import { useNavigation } from "@react-navigation/native";


const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const navigation =useNavigation();

    const onRegisterPressed =()=>{
        console.warn("Registered");
        navigation.navigate("HomeScreen")
    };
    const onSignInFacebook =()=>{
        console.warn("Facebook Sign In");
    };
    const onSignInGoogle =()=>{
        console.warn("Google Sign In");
    };
    const onSignInPressed =()=>{
        console.warn("Sign In");
        navigation.navigate("SignIn")
    };
   
    return(
        <ScrollView>
        <View style ={styles.container}>
            <Text style={styles.title}>Create an account</Text>

            <CustomInput 
            placeholder={"Username"} 
            value={username} 
            setValue={setUsername}/>

            <CustomInput 
            placeholder={"Email"} 
            value={email} 
            setValue={setEmail}/>

            <CustomInput 
            placeholder={"Password"} 
            value={password} 
            setValue={setPassword}/>

            <CustomInput 
            placeholder={"Repeat Password"} 
            value={passwordRepeat} 
            setValue={setPasswordRepeat}/>

            <CustomButton text="Register" onPress={onRegisterPressed} type="PRIMARY"/>
            <Text style={styles.text}>
                Terms of use, goes <Text style = {styles.link}>here</Text> 
                  {/* link for terms of use can be added later */}
            </Text>
          
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

            <CustomButton text="Have an account? Sign in!" onPress={onSignInPressed} type= "TERTIARY"/>
        </View>
        </ScrollView>
        

    );
};
const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        padding: 20,
    
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color:'#051c60',
        margin: 10,
    },
    text:{
        color:'gray',
        marginVertical:10
    },
    link:{
        color:'red'
    },

    
});
export default SignUpScreen