import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../../screens/Login"
import Home from "../../screens/Home"
import { propsNavigationStack } from "./Models";
const { Navigator, Screen } = createNativeStackNavigator<propsNavigationStack>()

export default function () {
    return (
        <Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Screen name="Login" component={Login} />
            <Screen name="Home" component={Home} />
        </Navigator>
    )
}