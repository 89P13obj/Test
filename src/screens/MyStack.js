import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AppScreen from "./AppScreen";
import AddHouseScreen from "./AddHouseScreen";

const AppStack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="App" mode="modal" headerMode="none">
        <AppStack.Screen name="App" component={AppScreen} />
        <AppStack.Screen name="Add" modal="true" component={AddHouseScreen}/>
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
