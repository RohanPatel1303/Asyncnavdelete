import React from "react";
import { Text,Touchable,View,TouchableOpacity } from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";

const Display=({navigation})=>{
    // let set=route.params.dataset;
    let jsondata;
    const[Data,setdata]=useState();
    console.log("----------set------------")
    // console.log(set)
    console.log("----------set------------")
    setTimeout(() => {
        getitem();
    }, 10000);
    const getitem=async()=>{
        try {
            jsondata=await AsyncStorage.getItem("list");
            console.log("====from disply=====");
            console.log(JSON.parse(jsondata));
         
            // setdata(jsondata);

        } catch (error) {
            console.log(error)
        }
        setdata(JSON.parse(jsondata));
        console.log(Data);
        console.log("======Data======");
    }
  

    const removeitem=async(item)=>{
        let filterarray= Data.filter((val,i)=>{
            if(val.count!=item.item.count)
            {

                return val;
            }

                        
        })
   


        try {
            await AsyncStorage.removeItem("list");
            console.log(filterarray);
            console.log("===filter array")
            await AsyncStorage.setItem("list",JSON.stringify(filterarray));
            console.log("areray updated")
        } catch (error) {
            
        }
        setTimeout(() => {
            
            setdata(filterarray);
        }, 10000);
        
        

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