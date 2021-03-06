import { StyleSheet, TextInput, View } from "react-native";

function Input({placeholder}) {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#E8E2E2"
        />
    )
}

export default Input;

const styles = StyleSheet.create({
    input: {
        height: 50,
        marginHorizontal: 25,
        marginVertical: 5,
        padding: 10,
        borderRadius: 50,
        backgroundColor: "white",
    }
})