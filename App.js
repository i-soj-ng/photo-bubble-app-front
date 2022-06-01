import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';
import { Login } from "./src/pages/Login";
import { Signup } from "./src/pages/Signup";
import { SignupAccept } from "./src/pages/SignupAccept";
import { Nickname } from "./src/pages/Nickname";
import { Main } from "./src/pages/Main";
import { TabNavigation } from "./src/navigations/TabNavigation";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='SignupAccept' component={SignupAccept} />
        <Stack.Screen name='Nickname' component={Nickname} />
        <Stack.Screen name='Main' component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
