import React, { useEffect } from "react";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView, View, Text, TextInput, StyleSheet, TouchableOpacity, ListViewBase, Alert } from "react-native";
import CheckBox from "@react-native-community/checkbox";
const Form = ({ navigation }) => {
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [agree, setagree] = useState(true);
    const [logged, setlogged] = useState(true);
    const [updates, setupdate] = useState(true);
    const [count, setcount] = useState(1);
    const [showerr, setshowerr] = useState(false);
    const [ferr, setferr] = useState(false);
    const [lerr, setlerr] = useState(0);


    let user = { fname, lname, email, agree, logged, updates, count };
    const validateemail = (newtext) => {
        console.log("hello");
        var getemail = newtext;
        var regex =/^([-.0-9a-zA-Z]+)@([-.a-zA-Z]+).[a-zA-Z]{2,7}$/
        var result = regex.test(getemail);
        console.log(result);
        if (!result) {
            console.log(result);
            setshowerr(true);
        }
        else{
            setshowerr(false);
        }
    }

    const validatfname = (newtextfname) => {
        var f_name = newtextfname;
        var f_len = f_name.length;
        console.log(typeof(f_len));
        if(f_len>0 && f_len<3){
            console.log("executred");
            setferr(true);
        }
        else{
            console.log("wlsae")
            setferr(false);
        }
        if(f_len==0)
        {
            setferr(true);
        }

    }
    const validatelname = (newtext) => {
        var l_name = newtext;
        var l_len = l_name.length;
        console.log(typeof(l_len));
        if(l_len>0 && l_len<3){
            console.log("executred");
            setlerr(true);
        }
        else{
            console.log("wlsae")
            setlerr(false);
        }
        if(l_len==0)
        {
            setlerr(true);
        }

    }

    const navigate_to = async () => {
        const stored_data = JSON.parse(await AsyncStorage.getItem("list"));
        const data = [user];
        var newdata = [];
        
        if (fname == "" || lname == "" || email == ""||lerr||ferr||showerr) {
            Alert.alert("Continue?","Details Entered Does not Follow Requirements ,Data Wont Be Updated",
            [
                {
                  text: "Navigate To Next Screen",
                  onPress: () => navigation.navigate("Display")
                },
                {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
                },
                // { text: "OK", onPress: () => console.log("OK Pressed") }
              ])
       

        }
        else {
            if (stored_data == null) {
                console.log("executed")
                await AsyncStorage.setItem("list", JSON.stringify(data));
                setcount(count + 1);


            }
            else {
                newdata = [...stored_data, user];
                await AsyncStorage.setItem("list", JSON.stringify(newdata));
                console.log((await AsyncStorage.getItem("list")))
                setcount(count + 1);


            }
            navigation.navigate("Display");
            setfname("");
            setlname("");
            setemail("");
        }

        // await AsyncStorage.clear();



    }

    return (
        <ScrollView contentContainerStyle={{ flex: 1 }}>
            <View style={[styles.container]}>
                <View style={[styles.box]}>
                </View>

                <ScrollView style={[styles.input_group]}>
                    <View style={[styles.box]}>
                        <Text style={[styles.title]}>Registration</Text>

                    </View>
                    <TextInput placeholderTextColor={"white"} style={[styles.input]} placeholder=" FirstName" defaultValue={fname}  onChangeText={   newtextfname => { setfname(newtextfname);validatfname(newtextfname);  }}></TextInput>
                    <View style={[styles.err_msg_view]}>
                        {
                            ferr ? <Text style={[styles.err_msg]}>Enter At Least 3 Characters</Text> : null
                        }

                    </View>

                    <TextInput placeholderTextColor={"white"} style={[styles.input]} placeholder=" LastName" defaultValue={lname} onChangeText={newtext => { setlname(newtext); validatelname(newtext); }}></TextInput>
                    <View style={[styles.err_msg_view]}>
                    
                    {
                        lerr ? <Text style={[styles.err_msg]}>Enter At Least 3 Characters</Text> : null
                    }
                    </View>

                    <TextInput placeholderTextColor={"white"} style={[styles.input]} placeholder=" Email" keyboardType="email-address" defaultValue={email} onChangeText={newtext => { setemail(newtext); validateemail(newtext); }}></TextInput>
                    <View style={[styles.err_msg_view]}>
                    
                    {
                        showerr ? <Text style={[styles.err_msg]}>Enter Email Parameter Correcttly eg: abc@xyz.com</Text> : null
                    }
                    </View>

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
                        <TouchableOpacity style={[styles.submit_touchable]} onPress={() => { navigate_to(); }}>
                            <Text style={{ color: "white", textAlign: "center" }}>Click</Text>
                        </TouchableOpacity>

                    </ScrollView>
                </ScrollView>
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
            justifyContent: "flex-end",
            marginBottom: 15,
        },
        title: {
            fontSize: 34,
            fontWeight: "bold",
            color: "white",
            textAlign: "center",


        },
        input: {
            borderColor: "#03e9f4",
            borderWidth: 3,
            // marginBottom: 10,
            fontWeight: "bold",
            borderRadius: 20


        },
        input_group: {
            flexDirection: "column",
            width: 250

        },
        checkbox_text: {
            flexDirection: "row",
            marginLeft: 50
        },
        text_check: {
            marginTop: 4,
            marginLeft: 10
        },
        submit_touchable: {
            backgroundColor: "#000000",
            alignSelf: "center",
            width: 70,
            height: 30,
            justifyContent: "center",
            borderRadius: 5,
            marginTop: 20
        },
        err_msg_view:{
            height:35,
            width:"100%",
            justifyContent:"center"
            // borderWidth:2
        },
        err_msg: {
            color: "red",
            textAlign: "center",
            fontSize:17,

            // borderWidth:2,
            marginBottom: 10,
            // fontSize:10,
        }

    }

)
export default Form;