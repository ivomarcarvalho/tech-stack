import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,

    },
    containerLogo: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
   //     backgroundColor: 'red',

    },
    containerForm: {
        flex: 2,
        flexDirection: "column",
        alignItems:"center",
   //     backgroundColor: 'lime',
        gap:20,
    },
    Text: {
        fontSize: 40,
        color: "blue",

    }
})