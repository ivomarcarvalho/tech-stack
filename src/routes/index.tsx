import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native"

import Stack from "./Stack"


export default function () {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="#38A69D" barStyle="light-content" />

            <Stack />
        </NavigationContainer>
    )
}

