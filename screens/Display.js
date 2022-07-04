import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View,Text } from "react-native";
const Display=()=>{
    const getData=async()=>{
        const myarray=[];

        try {
            const data= await  AsyncStorage.getItem("list");
            // console.log("-----Data----")
            // console.log(data);
            // console.log("-----Data----")

            const details=JSON.parse(data);
            Object.values(details).map(function(key,index){
                // console.log(details[index]);
                // console.log(typeof(details[index]));
                // var x = JSON.stringify(details[index]) 
                // var x =JSON.parse(details[index]);
                console.log(details[index]);
                var x =(details[index]);
                console.log(typeof(x));
                console.log("its x");
                myarray.push(x);
                console.log(myarray);;
                console.log("------array");
                // Object.values(x).map(function(key,index){
                //     console.log("---inner loop ---")
                //     console.log(x);
                //     console.log("---inner loopf----")

                // })
            })
            console.log("--array is =----")
            console.log(myarray);;
            console.log(Object.keys(myarray));
            console.log(typeof(myarray));
            Object.values(myarray).map(function(key,index){
                console.log("-----my array-------");
                console.log(myarray[index]);
                // console.log(myarray[key]);
                var rohan=myarray[index]
                console.log(typeof(rohan));
                Object.values(rohan).map(function(key,index){
                    console.log(Object.keys(rohan));
                    var x=toString(rohan[key]);
                    console.log(x);
                })
            })
        } catch (err) {
            console.log(err)
        }
    }
    const Returndata=()=>{
       
    }
    getData();

    return(
        <View>
            <Text>hello</Text>
            <Text></Text>
            {/* <returndata></returndata> */}
            
        </View>
    )
  
 
}
export default Display;