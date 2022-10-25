import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";


 
export default function App() {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
 
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/f/f7/LOGO_corporate_white.jpg'}} />
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#000"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity 
        onPress={()=>loginUser(email,password)}style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <View marginTop="10%">
      <TouchableOpacity onPress={()=>navigation.navigate('Signup')} >
        <Text style={styles.setup_button}>Don't have an account ? SignUp Now</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 60,
    width:"80%",
    height:"20%",
    
  },
 
  inputView: {
    backgroundColor: "white",
    borderRadius: 25,
    width: "80%",
    height: 50,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color:'orange',
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "orange",
  },
  setup_button:{
    height: 30,
    marginBottom: 30,
    color:'orange',
    textAlign: 'center',

  }
});