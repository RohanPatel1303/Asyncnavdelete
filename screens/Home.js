import React from "react";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView, View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import CheckBox from "@react-native-community/checkbox";
const Form = ({ navigation }) => {
    const [agree,setagree]=useState(true);
    const [logged,setlogged]=useState(true);
    const [updates,setupdate]=useState(true);
    return (
        <ScrollView contentContainerStyle={{ flex: 1 }}>
            <View style={[styles.container]}>
                <View style={[styles.box]}>
                    <Text style={[styles.title]}>Registration</Text>

                </View>
                <View>
                    <View style={[styles.input_group]}>
                        <ScrollView>
                            <TextInput placeholderTextColor={"white"} style={[styles.input]} placeholder=" FirstName"></TextInput>
                            <TextInput placeholderTextColor={"white"} style={[styles.input]} placeholder=" LastName"></TextInput>
                            <TextInput placeholderTextColor={"white"} style={[styles.input]} placeholder=" Email" keyboardType="email-address"></TextInput>
                            <View style={[styles.checkbox_text]}>
                                <CheckBox tintColor="#000000" disabled={false} onFillColor="#000000" value={agree} onValueChange={(keyvalue) => setagree(keyvalue)} tintColors={{ true: '#000000', false: '#d4d4d4' }}></CheckBox><Text style={[styles.text_check]}> I Agree</Text>
                            </View>
                            <View style={[styles.checkbox_text]}>
                                <CheckBox tintColor="#000000" disabled={false} onFillColor="#000000" value={logged} onValueChange={(keyvalue) => setlogged(keyvalue)} tintColors={{ true: '#000000', false: '#d4d4d4' }}></CheckBox><Text style={[styles.text_check]}> Keep Me Logged In</Text>
                            </View>
                            <View style={[styles.checkbox_text]}>
                                <CheckBox tintColor="#000000" disabled={false} onFillColor="#000000" value={updates} onValueChange={(keyvalue) => setupdate(keyvalue)} tintColors={{ true: '#000000', false: '#d4d4d4' }}></CheckBox><Text style={[styles.text_check]}> Receive Updates!!</Text>
                            </View>
                            <ScrollView>
                            <TouchableOpacity style={[styles.submit_touchable]}>
                                <Text style={{color:"white", textAlign:"center" }}>Click</Text>
                            </TouchableOpacity>

                            </ScrollView>
                        </ScrollView>
                    </View>
                </View>
                <View style={[styles.box]}></View>
            </View>
        </ScrollView>

    )

}
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#00000099"

        },
        box: {
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "flex-end",
            marginBottom: 15
        },
        box1: {

        },
        title: {
            fontSize: 34,
            fontWeight: "bold",
            color: "white"

        },
        input: {
            borderColor: "#03e9f4",
            borderWidth: 3,
            marginBottom: 20,
            fontWeight: "bold",
            borderRadius: 20


        },
        input_group: {
            flexDirection: "column",
            width: 300

        },
        checkbox_text: {
            flexDirection: "row",
            marginLeft: 50
        },
        text_check: {
            marginTop: 4,
            marginLeft: 10
        },
        submit_touchable:{
            backgroundColor:"#000000",
            alignSelf:"center",
            width:70,
            height:30,
            justifyContent:"center",
            borderRadius:5,
            marginTop:20
        }

    }

)
export default Form;