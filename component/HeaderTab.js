import {  View, Text,TouchableOpacity } from 'react-native'
import React,{useState}from 'react'


export default function HeaderTab() {
  const[activeTab,setActiveTab]=useState("Booking");
  return (
    <View style={{flexDirection:"row",alignSelf:"center",padding:20}}>
       <HeaderButton Text="Booking" btnColor="black" textColor="white" activeTab={activeTab} setActiveTab={setActiveTab} />
       <HeaderButton Text="Delivery" btnColor="white" textColor="black" activeTab={activeTab} setActiveTab={setActiveTab} />

    </View>
    
  );
}
const HeaderButton =(props)=>(
    <TouchableOpacity style={{
        backgroundColor:props.activeTab==props.Text? 'white':'black',
        paddingVertical:10,
        paddingHorizontal:16,
        borderRadius: 30,

    }}
    onPress={()=>props.setActiveTab(props.Text)}
    >
    <Text style={{color:props.activeTab==props.Text? 'black':'white',fontSize:15,fontWeight:"900"}}>{props.Text}</Text>
    </TouchableOpacity>
    
    );