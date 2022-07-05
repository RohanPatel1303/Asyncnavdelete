import React from "react";
import { SafeAreaView,Text,View,FlatList,StyleSheet,TouchableOpacity } from "react-native";
import { useState } from "react";
const temp=[];
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
 
  
  const FlatList_1=()=>{
    const removeItem=(title)=>{
        console.log(title);
        let filterarray= Data.filter((val,i)=>{
            if(val.title!=title.title){
                console.log(val);
                return val;

            }
        })
        console.log(filterarray);
        setData(filterarray);
        
        
      }
  const [Data,setData]=useState(DATA)
  const Item=({title})=>(
    <View>
        <Text>{title}</Text>
        <TouchableOpacity style={{width:"100%",borderColor:"black",borderWidth:3}} onPress={()=>removeItem({title})} ><Text>Click</Text></TouchableOpacity>
    </View>
  )

    const renderItem=({item})=>(
        <Item title={item.title}/>
    )
    return(
        <SafeAreaView>
            <FlatList
            data={Data}
            renderItem={renderItem}
            
            
            ></FlatList>
        </SafeAreaView>
    )
  }
  export default FlatList_1;