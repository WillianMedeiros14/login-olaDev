import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SignIn } from "../screens/SignIn";
import { SignUp } from "../screens/SignUp";

const {  Navigator, Screen  } = createNativeStackNavigator();

export type RootStackParamList = {
    SignIn: String | undefined;
    SignUp: String | undefined;
};


export function Routes() {
    return (
       <Navigator
        screenOptions={{
            headerShown: false,
        }}
       >
            <Screen name="SignIn" component={SignIn} />
            <Screen name="SignUp" component={SignUp} />
       </Navigator>
    );
}       