// import React from "react";
// import { Text,Touchable,View,TouchableOpacity } from "react-native";
// import { useState } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// const Display=({navigation,route})=>{
//     console.log(route.params);
//     let dataset=route.params.dataset;
//     // console.log(Object.keys(dataset));
//     console.log(dataset)
//     console.log("-------")
//     const removeitem=(index)=>{
//         console.log(index);
//         console.log(dataset)
//         console.log("    before  --------------->")
//         dataset=Object.values(dataset).splice(index,1);
//         console.log("    After  --------------->")
//         console.log(dataset)

        
//     }
//     const [count,setcount]=useState(1);
//         return(
        
//             <View>
//              <Text>hello</Text>
//              {Object.keys(dataset).map(function (key, index) {
//                     // return(
//                     //     <Text>Data:{key}{JSON.stringify(data[key])}</Text>
//                     // )
//                     const variable = dataset[key];
//                     var arrayfinal = [];

//                     // console.log(data[key]);
//                     console.log(variable)

//                     Object.keys(variable).map(function (k) {
//                         var name = JSON.stringify(variable[k])
//                         console.log(name)
//                         arrayfinal.push(name);

//                     })
//                     console.log(typeof (arrayfinal))
//                     const keys = Object.keys(arrayfinal);
//                     console.log(keys)
//                     return (
//                         <View style={{ marginBottom: 10}}>

//                             <Text style={{fontWeight:"bold"}}>Firstname: {arrayfinal[0]}</Text>
//                             <Text style={{fontWeight:"bold"}}>Lastname: {arrayfinal[1]}</Text>
//                             <Text style={{fontWeight:"bold"}}>Email: {arrayfinal[2]}</Text>
//                             <TouchableOpacity onPress={()=>{removeitem(key);()=>setcount({count}+1)}}>
//                                 <Text>DELETE</Text>
//                             </TouchableOpacity>


//                         </View>
//                     )

//                 })}
                  
             
              
//             </View>
//         )

    

// }
// export default Display;