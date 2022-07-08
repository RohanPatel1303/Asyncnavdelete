import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Form from "../screens/Home";
import Display from "../screens/Display"
import Datadisplay from "../screens/datadisplay";
import Subpostaldata from "../screens/SubPostaldata";
import Postalapi from "../screens/Postalapi";
function Root(){
    const Stack=createStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen  component={Form} name="Home"></Stack.Screen>
                <Stack.Screen component={Display} name="Display"></Stack.Screen>
                <Stack.Screen component={Postalapi} name="Postalapi"></Stack.Screen>
                <Stack.Screen component={Subpostaldata} name="Subpostaldata"></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>

    )
}
export default Root;