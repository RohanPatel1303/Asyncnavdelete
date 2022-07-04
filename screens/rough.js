import React from "react";
import { Text,Touchable,View,TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Displaay=({route,navigation})=>{
    var receiveddata = route.params;
    var data = receiveddata.list;
    const deleteelement=(received)=>{
        console.log(received);
        // console.log("------")
    //  console.log(typeof(data));
    //  data.remove(received);
    received=Number(received)
    console.log(typeof(received));
     console.log(Object.keys(data));
     Object.keys(data).indexOf(data[received]);
  
     console.log(Object.values(data).indexOf(data[received]));
     try {
         
         data.splice(received,1)
     } catch (error) {
        console.log(error);
        
     }
     console.log(data);

     console.log("ashgdcya")

    }
    console.log(data);
    const navigate_to_self=()=>{
        console.log("--tehe---");
        console.log(data);
        console.log(route.params);
        console.log("--tehe---");
        navigation.navigate("Display",{route});
    }

        return(
        
            <View>
             <Text>hello</Text>
             {Object.keys(data).map(function (key, index) {
                    // return(
                    //     <Text>Data:{key}{JSON.stringify(data[key])}</Text>
                    // )
                    const variable = data[key];
                    var arrayfinal = [];

                    // console.log(data[key]);
                    console.log(variable)

                    Object.keys(variable).map(function (k) {
                        var name = JSON.stringify(variable[k])
                        console.log(name)
                        arrayfinal.push(name);

                    })
                    console.log(typeof (arrayfinal))
                    const keys = Object.keys(arrayfinal);

                    console.log(keys)
                    return (
                        <View style={{ marginBottom: 10, alignItems: "center" }}>

                            <Text style={{fontWeight:"bold"}}>Name:{arrayfinal[0]}</Text>
                            <Text style={{fontWeight:"bold"}}>Lastname{arrayfinal[1]}</Text>
                            <Text style={{fontWeight:"bold"}}>Email:{arrayfinal[2]}</Text>
                            <TouchableOpacity onPress={()=>{deleteelement([key]);navigate_to_self();}}>
                                <Text>Delete</Text>
                            </TouchableOpacity>
                            {/* <Text style={{fontWeight:"bold"}}>Agreed:{arrayfinal[3]}</Text> */}
                            {/* <Text style={{fontWeight:"bold"}}>Keep Me Logged In:{arrayfinal[4]}</Text> */}
                            {/* <Text style={{fontWeight:"bold"}}>Receive Updates:{arrayfinal[5]}</Text> */}





                        </View>

                    )

                })}
            </View>
        )

    

}
export default Displaay;