import React from "react";
import { View,Text,StyleSheet } from "react-native";
const Subpostaldata=({navigation,route})=>{
    var details=[];
    console.log(route.params);
    var x=route.params;
   details=x;
   console.log("sdgfg")
    console.log(details);

return(
    <View>
        <View style={[styles.details_view]}>
            <Text style={[styles.text_view]}>Name:</Text>
            <Text style={[styles.text_view]}>{details.Name}</Text>
        </View>
        <View style={[styles.details_view]}>
            <Text style={[styles.text_view]}>BranchType:</Text>
            <Text style={[styles.text_view]}>{details.BranchType}</Text>
        </View>
        <View style={[styles.details_view]}>
            <Text style={[styles.text_view]}>Description:</Text>
            <Text style={[styles.text_view]}>{details.Description}</Text>
        </View>
        <View style={[styles.details_view]}>
            <Text style={[styles.text_view]}>DeliveryStatus</Text>
            <Text style={[styles.text_view]}>{details.DeliveryStatus}</Text>
        </View>
        <View style={[styles.details_view]}>
            <Text style={[styles.text_view]}>Circle</Text>
            <Text style={[styles.text_view]}>{details.Circle}</Text>
        </View>
        <View style={[styles.details_view]}>
            <Text style={[styles.text_view]}>District</Text>
            <Text style={[styles.text_view]}>{JSON.stringify(details.Description)}</Text>
        </View>
        <View style={[styles.details_view]}>
            <Text style={[styles.text_view]}>Division</Text>
            <Text style={[styles.text_view]}>{details.Division}</Text>
        </View>
        <View style={[styles.details_view]}>
            <Text style={[styles.text_view]}>Region</Text>
            <Text style={[styles.text_view]}>{details.Region}</Text>
        </View>
        <View style={[styles.details_view]}>
            <Text style={[styles.text_view]}>State</Text>
            <Text style={[styles.text_view]}>{details.State}</Text>
        </View>
        <View style={[styles.details_view]}>
            <Text style={[styles.text_view]}>Country</Text>
            <Text style={[styles.text_view]}>{details.Country}</Text>
        </View>
        <View style={[styles.details_view]}>
            <Text style={[styles.text_view]}>Pincode</Text>
            <Text style={[styles.text_view]}>{details.Pincode}</Text>
        </View>
    </View>
)

    
}
const styles=StyleSheet.create({
    details_view:{
        borderWidth:2,
        borderRadius:10,
        margin:10,
        height:30,
        flexDirection:"row",
        justifyContent:"flex-start"
    },
    text_view:{
        textAlign:"center",
        flex:1,
        // borderWidth:1
    }
}
)  

export default Subpostaldata;