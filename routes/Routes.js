import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../components/Home";
import Messages from "../components/Messages";
import Chat from "../components/Chat";
import Login from "../components/Login";
import UserProfile from "../components/UserProfile";

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            animation: 'slide_from_bottom',
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false , animation: 'none'}}
        />
        <Stack.Screen
          name="Messages"
          component={Messages}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{
            headerShown: false,
          }}
          />
        <Stack.Screen
          name="Profile"
          component={UserProfile}
          options={{ 
            headerShown: false ,
            animation: 'none'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Routes;
