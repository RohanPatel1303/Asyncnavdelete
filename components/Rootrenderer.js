import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
function Root(){
    const Stack=createStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen component={form} name="Home"></Stack.Screen>
                <Stack.Screen component={Display} name="Display"></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>

    )
}
export default Root;