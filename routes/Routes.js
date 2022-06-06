import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/Home";
import Messages from "../components/Messages";

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen 
          name="Messages"
          component={Messages}
          options = {{
              headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Routes;
