import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Form from "../screens/Home";
import Display from "../screens/Display"
import Datadisplay from "../screens/datadisplay";
function Root(){
    const Stack=createStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen  component={Form} name="Home"></Stack.Screen>
                <Stack.Screen component={Display} name="Display"></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>

    )
}
export default Root;