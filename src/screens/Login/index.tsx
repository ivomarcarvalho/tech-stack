import React from "react";
import {
    Image,
    Text,
    View
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "@/routes/Stack/Models";

import { styles } from "./styles"
import { Button } from "@/components/button";
import {Input} from "@/components/input"

const Login = () => {
    const navigation = useNavigation<propsStack>()
    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image
                    source={require('@/assets/techhall.png')}
                    style={{ width: '100%' }}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.containerForm}>
                <Text style={styles.Text}>Login</Text>
                <Input/>
                <Button title="Entrar" onPress={() => navigation.navigate("Home")} />
            </View>
        </View>
    )
}

export default Login