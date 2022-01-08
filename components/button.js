import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function Button() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>Registarion</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginTop: 40
    },
    button: {
        width: "100%",
        height: 60,
        backgroundColor: "#9DC2CE",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2,
    },
    text: {
        fontWeight: "bold",
        fontSize: 18
    }
})