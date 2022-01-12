import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Button from "../components/button";
import Circle from "../components/circle";
import Input from "../components/input";

function Register(props) {

    const { navigation } = props;
    return (
        <KeyboardAwareScrollView style={styles.container}>
            <Circle />
            {/* Header */}
            <View style={styles.titleBox}>
                <Text style={styles.title}>WELCOME ONBOARD!</Text>
                <Text style={styles.summary}>Let’s hope you meet of your tasks!</Text>
            </View>
            <View style={styles.image} >
                <Image source={require("../assets/registerImage.png")} />
            </View>
            {/* Inputs & Button */}
            <View>
                <Input placeholder="Firstname" />
                <Input placeholder="Lastname" />
                <Input placeholder="Mail" />
                <Input placeholder="Phone" />
            </View>
            <Button title="Register" />
            {/* Footer */}
            <View style={styles.footer}>
                <Text>Already have an acount?</Text>
                <TouchableOpacity>
                    <Text
                        style={styles.signIn}
                        onPress={() => navigation.navigate('Login')}
                    > Sign in</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default Register;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FDFCFC",
    },
    titleBox: {
        marginTop: 30,
        marginBottom: 10,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    summary: {
        fontSize: 16,
    },
    image: {
        alignItems: "center",
        marginVertical: 10,
    },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 25
    },
    signIn: {
        color: "#00C1FF",
        fontWeight: "bold"
    }
})