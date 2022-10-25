import React from "react";
import { Button,Alert,Image,ImageBackground, StyleSheet, Text, View } from "react-native";
import render from "react-native-web/dist/cjs/exports/render";
import GradientButton from "../component/GradientButton";


const image = { uri: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/311516058.jpg?k=6d12754c73e09d390cb4ba95b52882eff96f1dd96b3feebdda2b051f8fbcc179&o=&hp=1" };

const Intro= () => (
 
    
    
    <View style={{alignItems:'center',marginTop:70}}>
       
      
        <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/f/f7/LOGO_corporate_white.jpg'}}style={{height:300 ,width:'100%',marginTop:10}}/>
        
        
        
        <View style={{height:300 ,width:'60%',resizeMode:'contain', marginTop:200}} >
        <GradientButton  />

        </View >
    
        
        </View>
      
    
    
 
);

const styles = StyleSheet.create({
 
  image: {
    flex: 1,
    justifyContent: 'center',
    opacity:1,
    height:500,
    float: 'left',
    width:"100%",
   
 
    
     },
  text: {
    color: "black",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
  }
});

export default Intro;


