import React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { View,Text,TouchableOpacity,FlatList } from "react-native";
const Postalapi=({navigation,route})=>{
    var data=[];
    console.log(route.params);
    console.log("----route params ---");
    console.log(route.params[0]);
    var data=route.params[0].PostOffice;
    console.log(data);
    console.log("---got ouj");
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
        <View>
     
          <FlatList
            data={data}
            renderItem={render}
          >
    
          </FlatList>
    
        </View>
      );
    
}
const styles=StyleSheet.create({
    city_pincode_view:{
      flexDirection:"row",
      justifyContent:"space-between",
      padding:10,
      borderWidth:2,
      borderRadius:10,
      marginBottom:10
    //   alignItems:"flex-start"
    }
  })
export default Postalapi;
