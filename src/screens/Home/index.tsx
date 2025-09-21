import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles"
import { Button } from "../../components/button";
import { useNavigation} from "@react-navigation/native";

const Home = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Text style={styles.Text}>Home</Text>
            <Button title="Voltar" onPress={()=>navigation.goBack()}/>
        </View>
    )
}

export default Home