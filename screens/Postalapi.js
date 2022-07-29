import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { View,Text,TouchableOpacity,FlatList,TextInput } from "react-native";
const Postalapi=({navigation,route})=>{
    const [search,setsearch]=useState('');
    const [filterdata,setfilterdata]=useState([]);
    const [postdata,setpostdata]=useState([]);
    useEffect(()=>{
        fetch("https://api.postalpincode.in/postoffice/City").then((response)=>response.json()).then((json)=>{
            console.log(json[0].PostOffice.Name);
            setfilterdata(json[0].PostOffice)
            setpostdata(json[0].PostOffice)
            
            console.log("hello")
        })
    },[]);
    const searchfilter=(text)=>{
        if(text){
            const newdata=postdata.filter(function (item){
                console.log(item.Name.toUpperCase());
                
                const itemdata=item.Name?item.Name.toUpperCase():''.toUpperCase();
                
            });
            setfilterdata(newdata);
            setsearch(text);

        }
        else{
            setfilterdata(postdata);
            setsearch(text);
        }
    }

const navigateto=(item)=>{
    navigation.navigate("Subpostaldata",item);

}
    const render = ({ item }) => {
        return (
          <View>
            <TouchableOpacity onPress={()=>{navigateto(item);}}>
            <View style={[styles.city_pincode_view]}>
    
              <Text style={{flex:.8,flexWrap:"wrap",maxHeight:100}} >{item.Name}</Text>
              <Text>{item.Pincode}</Text>
              <Text>Tap For More Details</Text>
           
            </View>
            </TouchableOpacity>
    
    
          </View>
        );
      };
    return (
        <View style={{backgroundColor:"#0F3D3E"}}>
            {/* <TextInput
          style={styles.textInputStyle}
          onChangeText={(text) => searchfilter(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        /> */}
        <Text style={{alignItems:"center",justifyContent:"center",textAlign:"center",color:"#F1F1F1"}}>
          POSTAL API DATA
        </Text>
     
          <FlatList
            data={filterdata}
            renderItem={render}
            
          >
    
          </FlatList>
    
        </View>
      );
    
}
const styles=StyleSheet.create({
    city_pincode_view:{
      backgroundColor:"#F1F1F1",
      flexDirection:"row",
      justifyContent:"space-between",
      padding:10,
      borderWidth:2,
      borderRadius:10,
      marginTop:10,
      marginLeft:5,
      marginRight:5,
      marginBottom:10,
      color:"#100F0F"
    
    //   alignItems:"flex-start"
    }
  })
export default Postalapi;
