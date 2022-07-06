import React from "react";
import { View,Text,TextInput,StyleSheet } from "react-native";
const Grid=()=>{
    return(
        <View style={[styles.container]}>
            <View style={[styles.round]}>
                    <Text style={[styles.roundtext]}>{item.fname}</Text>
            </View>
            <View style={[styles.details]}>
                <Text>LastName:</Text>
                <Text>Email:</Text>
                <Text>Agreed:</Text>
                <Text>Logged:</Text>
                <Text>Updates:</Text>

            </View>
            <View style={[styles.details]}>
                <Text>{item.lname}</Text>
                <Text>{item.email}</Text>
                <Text>{JSON.stringify(item.agree)}</Text>
                <Text>{JSON.stringify(item.logged)}</Text>
                <Text>{JSON.stringify(item.updates)}</Text>


            </View>
        </View>
    )
}
const styles=StyleSheet.create(
    {
        container:{
            flexDirection:"row",
            textAlign:"center"
        },
        round:{
            borderColor:"black",
            borderRadius:100,
            backgroundColor:"skyblue",
            width:100,
            height:100,
            justifyContent:"center",
            marginTop:10,
            marginLeft:10,
            
            
        },
        roundtext:{
            textAlign:"center",


        },
        details:{
            justifyContent:"center",
            marginLeft:15

        }
    }
)
export default Grid;