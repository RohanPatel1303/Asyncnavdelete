import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, TextInput } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Registration from "./Registration";


// const image = { uri: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwcHBw0HBwcHBwcHBw0HBwcHBw8ICQcNFREWFhURExMYKCggGBoxJxUfITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0NDw0PDysZFRk3LTc3LTcrLTcrKy03LS0rKy0rKy0tKy0rKysrKysrKystKysrKysrKystLSsrKzctLf/AABEIALcBEwMBIgACEQEDEQH/xAAaAAEBAQADAQAAAAAAAAAAAAACAQADBAUG/8QAFhABAQEAAAAAAAAAAAAAAAAAAAER/8QAGgEBAQEBAQEBAAAAAAAAAAAAAgEABQMGBP/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A9yHIkhSP1V+2UoUSHIJyrCkSFBr0lWHEkKC9JVhRIUGvSVYUSFBPShRIUYaUKDCiBThQYUQaUOBCjDThQIUQThShKUrDTlLXHq6w4eroa2o2Fo2po2s2LaNrWhahSNaNrWjaxyMw6jE+YhxIUdB+KUpCiQoNekqw4kKCcqwokKDXpKsKJCg16SrCiRYJylCiQozVYcCFEE4UCFEo04sGFEEoUCFKyUpSlCLqCeroausmFraOpqNhalqaNrLi2ja1o2sUjWha1o2oUjaw6zFj5+FEhx0XOlWFEhwacqwokKDXpKsKJCiU5VixosF6SlFiQoNOVYUGFBIosSLGQoUGLGEoUFYiFFFUQtXR1tRMPW0dbWTC1tHU1FwtS0dS1lxbRta0bWWRrQta0bUORdYNZlx40ODDjo1yZVhwYcE5VhRIUSvSVYUSFBOVYsSFEOVYsSEL0lWLEijhyrCglEVYqKiEoqyEwrqIWro62oha2jrajFqaOtrLi6lqalqLjWja1o2sUjWja1o2sUjawazFjzYcGHHScSVYcGHBwpVhRIUE5VixosTDlWFEiwcekqqyocrKywcOVlRRw5VVFRVUVRFXRZmJtHW1mLW0dbUxsXU1NTUXF1LUtS1FxbRtS0bUKRbQta0bWKRtYdZix04cGHHTfPyrDgwohSlCiRYNhyrCiQohyrFiRYOHKsWIqYcqqiicrK0YbDlZUZDlVUZCVkZGVtRNRl1tTU1lXU1NS1FW1LUtS1Fa0bWtG1Cka0bWtG1DkbWHWZXDDgwo6uPmpShRIUEpVhRIUQ5VixosTClWKhDhysrMmHKrMw4cqszIcrMzDhyszImHKrIw4crMiamKupramoq6NraNrEtqWpaNqLIto2taNqE1oWraFqE2smsy60KDDjqvlZShRIUQ5VhRIUHClWLEhIUrKyocrKijhyszMhyqyMmHKqMw4crMyJhyszIOFK2oyJhyslbU1MKVqlrUamFrWpa1G1MLWtG1rRtZdaja1o2tjayhqti65IcGFHTx8tpQ4MKIWlFjRYhSrFaKmHKrMqYUrMyicqKzJhyozMhSszIOHKyMyYcrIyIcrIyVMKVqNWjRw5WqWtRrLrWpalS1C1rRta0bUxda0LVtG1sXW1h1mxtdmHAhx0nzGlDgw4xasKJCiYWrFjRUKVlZkKVmZhw5WZmQ5UZkTClZFQcOVkZEOVkZKmHKw1ko4UrWpWo2thStalrWjamFrWja1qWpi6lo1bRtbC1KNa0bUxtZh1mxdd6HAhx0nzOnCgw4haUKDCiLqwkhNhSszMOFKzMyHKiKiYcrVGQcOVkZEKVkZKmHKw1rUqHK1StRtQpWtS1rRtTCla0bVtG1MLWtG1rRtTF1rRta0bWxda0LVtC1F1tYdZsXXoxyRmdF82cOMyKcKMyEUJmZWZmQolZmSnESownGGqyU4KVmQolFmE4lS1malBtSswnBtG1mQolG1mZRtG1mQhtG1mZRtC1mRR1WZmf/2Q==" };
const Details = ({ route, navigation }) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [value, setValue] = useState("");
    const [index, setIndex] = useState("");
    const [list, setList] = useState([]);
    // const [newdata, setNewData] = useState('newArray');
    
    const receiveddata = route.params;
    const data = receiveddata.list;
    //  const type=typeof(data);
    //  console.log(typeof(data));
    //  console.log("hgeyauh")
    Object.keys(data).map(function (key, index) {
        // console.log(data[key]);

    })

    const handleSubmit = () => {
      
        navigation.navigate('Details',{list
    //         // firstname: JSON.stringify(firstname),
    //         // lastname: JSON.stringify(lastname),
    //         // email: JSON.stringify(email),
    //         // region: JSON.stringify(region),
        });
    };

    const removeitems = (item) => {
        if(list !== null && list !== undefined) {
            const index = arrayfinal.indexOf(item)
        }
    }

    const removeitemtolist = async (list) => {(list)
        // const keys = [1,2];
        const receiveddata = route.params;
        const data = receiveddata.list;
        Object.keys(data).map(function (key, index) {
        // console.log(data[key]);
    });
        try {
            // list.splice({firstname, lastname, email, value});
            // data.splice (2,1);
            const newArray = data.splice(index,1);
            console.log(newArray);
            // await AsyncStorage.setData("arrayfinal", JSON.stringify(data))
            // setData({data: JSON.parse(await AsyncStorage.getData("arrayfinal"))})
        } catch (err) {
            console.log(err);
        }
    // console.log(newArray);
    }
    // console.log(data);

    
    return (
        <ScrollView>
            <View>
            {/* <ImageBackground source={image} resizeMode="stretch"> */}
                {/* {data} */}
                {/* Object.keys(data) */}
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
                        <View style={{ marginBottom: 10}}>

                            <Text style={{fontWeight:"bold"}}>Firstname: {arrayfinal[0]}</Text>
                            <Text style={{fontWeight:"bold"}}>Lastname: {arrayfinal[1]}</Text>
                            <Text style={{fontWeight:"bold"}}>Email: {arrayfinal[2]}</Text>
                            <Text style={{fontWeight:"bold"}}>Region: {arrayfinal[3]}</Text>
                            {/* <TextInput value = {newdata}
        onChangeText = {(text) => setNewData(text)}/> */}

                        </View>
                    )

                })}
                <View>
                    <TextInput 
                    style={styles.input}
                    placeholder="Enter the index at which you want to remove Details"
                    value = {index}
                    onChangeText = {(text) => setIndex(text)}
                    />
                </View>
                    <View>
                        <TouchableOpacity style={[styles.submitBtn]} 
                        onPress={() => {removeitemtolist() }}>
                        <Text style={styles.submitTxt} >DELETE</Text>
                        </TouchableOpacity>
                    </View>
            {/* </ImageBackground> */}
            </View>
        </ScrollView>
    )
    };

    const styles = StyleSheet.create({
        submitBtn: {
            height: 50,
            alignItems: "center",
            // justifyContent: "center",
            marginBottom:"10%",
            width: '70%',
            marginLeft:"15%",
            borderRadius: 10,
            backgroundColor: "black",
            padding: 10
          },
    
          submitTxt: {
            color: "white",
            fontWeight: "bold",
            fontSize: 20
          },

    //       img: {
    //         flex: 1,
    //         // justifyContent: "center",
    //   },

      input: {
        fontWeight: "bold",
        height: 50,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "black",
        alignItems: "center",
        justifyContent: "center",
        marginTop: '5%',
        marginBottom: '10%',
      },
    });

export default Details;







import React from "react";
import { Text,Touchable,View,TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Display=({navigation})=>{
    const dataset=[];
    setTimeout(() => {
    console.log(dataset);
        
    }, 1000);
    getitem();

    async function getitem() {
        try {
            const data= await AsyncStorage.getItem("list");
            dataset.push(data);
            
            console.log(dataset);
        } catch (error) {
            console.log(error)
        }
    }
    
        return(
        
            <View>
             <Text>hello</Text>
             {
            
                    Object.keys(dataset).map(function(key,index){
                        Object.keys(dataset[key]).map(function(keys,indexx){
                            return(
                                <Text>
                                    {dataset[key][keys]}sdfgsd
                                </Text>
                            )
                        })
                    })
              
             }
              
            </View>
        )

    

}
export default Display;