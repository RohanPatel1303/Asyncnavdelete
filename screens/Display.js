import React from "react";
import { Text,Touchable,View,TouchableOpacity } from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";

const Display=({navigation})=>{
    let[Data,setdata]=useState([]);
    async function getasyncdata() {

        const data = await AsyncStorage.getItem("list");
        setdata(JSON.parse(data));
    
    }  
    setTimeout(() => {
        
        getasyncdata();
    }, 5000);
    console.log(Data)
 const removeitem=async(item)=>{
    const filterarray=[];
    filterarray=Data.filter()

 }
  
 

    const renderItem=({item})=>(
        <View>
            <Text>First Name:{item.fname}</Text>
            <Text>Last Name:{item.lname}</Text>
            <Text>Email:{item.email}</Text>
            <TouchableOpacity style={{width:"20%",borderWidth:2,borderColor:"black"}} onPress={()=>{removeitem({item});}}>
                <Text>Delete</Text>
            </TouchableOpacity>

        </View>
        
    )

    return(
        <SafeAreaView>
            <FlatList
            data={Data}
            renderItem={renderItem}>

            </FlatList>
        </SafeAreaView>
    )
    
        


}

export default Display;