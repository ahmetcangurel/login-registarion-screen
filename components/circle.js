import { View, StyleSheet } from "react-native";

function Circle() {
    return (
        <View>
            <View style={styles.circle1} />
            <View style={styles.circle2} />
        </View>
    )
}

export default Circle;

const styles = StyleSheet.create({
    circle1: {
        width: 200,
        height: 200,
        backgroundColor: "#D6E6F1",
        borderRadius: 200,
        position: "absolute",
        top: -110,
        opacity: 0.7
    },
    circle2: {
        width: 200,
        height: 200,
        backgroundColor: "#D6E6F1",
        borderRadius: 200,
        left: -120,
        opacity: 0.7,
        position: "absolute"
    }
})