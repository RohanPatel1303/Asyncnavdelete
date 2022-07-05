import React from "react";
import { Text,Touchable,View,TouchableOpacity } from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";

const Display=({navigation})=>{
   
    let[Data,setdata]=useState([]);
   getdatafromasync=async()=>{
    
      setdata(JSON.parse(await AsyncStorage.getItem("list")));
    
   }
   getdatafromasync();
   removeitem=async(item)=>{
    getdatafromasync();
    var filterarray=[];
    filterarray=Data.filter((val,i)=>{
      
        if(val.count!=item.item.count)
        {
       
            return val
        }
    })

    await AsyncStorage.setItem("list",JSON.stringify(filterarray));
    console.log("succes in updation");
   
        alert("deleted")
        setdata(filterarray);


   }
  
   console.log("from Disoplay")
   console.log(Data);

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