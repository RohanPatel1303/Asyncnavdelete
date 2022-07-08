import React, { useEffect } from "react";
import { Text, Touchable, View, TouchableOpacity, Image, StyleSheet, Dimensions, ToastAndroid } from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
console.log(windowHeight)
console.log(windowWidth);
const Display = ({ navigation }) => {
const [postdata,setpostdata]=useState([]);
    var post
    let [Data, setdata] = useState([]);
    const  fetchpostdata=async()=>{
        ToastAndroid.show("Loading.........",ToastAndroid.SHORT);
        fetch("https://api.postalpincode.in/postoffice/City").then((response) => response.json()).then((json) => {
            // setpostdata(json)
            post=json;
            console.log(post);
            console.log("success12")
            // ToastAndroid("Loading");
            
            navigation.navigate("Postalapi",post);
            
            
        }).catch((err) => console.log(err))
        //   setpostdata(post);
      console.log("success")

    }
    async function getasyncdata() {

        const data = await AsyncStorage.getItem("list");
        setdata(JSON.parse(data));

    }
   
        setTimeout(() => {
            

            
            getasyncdata();
        }, 200);



    const removeitem = async (item) => {
        var filterarray = [];
        filterarray = Data.filter((val, i) => {
            if (item.item.count != val.count) {
                return val;

            }
        })
        setdata(filterarray)
        await AsyncStorage.setItem("list", JSON.stringify(filterarray));
    }
  
 
const navigate_to_postalapi=async()=>{
   

   
}


    const renderItem = ({ item }) => (

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
            <View style={[styles.deletelogo]}>
                <TouchableOpacity  onPress={() => { removeitem({ item }); }}>
                    <Image source={{ uri: "https://i.im.ge/2022/07/07/uY7Vwr.jpg", width: 50, height: 50 }}></Image>
                </TouchableOpacity>
            </View>
        </View>

    )

    return (
        <SafeAreaView style={{ backgroundColor: "#83AF9B", flex: 1 }}>
            <TouchableOpacity onPress={()=>{fetchpostdata();}}>
                <Text>Redirect To Post Data!!</Text>

            </TouchableOpacity>
            <FlatList
                data={Data}
                renderItem={renderItem}>

            </FlatList>
        </SafeAreaView>
    )




}
const styles = StyleSheet.create(
    {
        container: {
            flexDirection: "row",
            textAlign: "center",
            width: "100%",
            borderColor: "black",
            borderWidth: 3,
            marginBottom: 10,
            marginTop: 10,
            backgroundColor: "#a1c4fd",
            borderRadius: 20
        },
        round: {
            borderColor: "black",
            borderRadius: 60,
            backgroundColor: "#FECEAB",
            width: 60,
            height: 60,
            justifyContent: "center",
            marginTop: 10,
            marginLeft: 10,


        },
        roundtext: {
            textAlign: "center",


        },
        details: {
            justifyContent: "center",
            marginLeft: 15,
            width: 100

        },
        deletelogo: {
            justifyContent: "center",
            alignItems: "flex-start",
            width: 100
        }
    }
)

export default Display;