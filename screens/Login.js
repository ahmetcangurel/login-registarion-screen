import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Button from "../components/button";
import Circle from "../components/circle";
import Input from "../components/input";

function Login(props) {

    const { navigation } = props;
    return (
        <KeyboardAwareScrollView style={styles.container}>
            <Circle />
            {/* Header */}
            <View style={styles.titleBox}>
                <Text style={styles.title}>WELCOME  BACK !</Text>
            </View>
            <View style={styles.image} >
                <Image source={require("../assets/loginImage.png")} />
            </View>
            {/* Inputs & Button */}
            <View>
                <Input placeholder="Mail" />
                <Input placeholder="Password" />
            </View>
            <TouchableOpacity style={styles.forgotPassContainer}>
                <Text style={styles.forgotPass}>Forget Password</Text>
            </TouchableOpacity>
            <Button title="Login" />
            {/* Footer */}
            <View style={styles.footer}>
                <Text>Don’t have an account?</Text>
                <TouchableOpacity>
                    <Text
                        style={styles.signIn}
                        onPress={() => navigation.navigate('Register')}
                    > Sign Up</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default Login;

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
    forgotPassContainer: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25
    },
    forgotPass: {
        fontSize: 18,
        color: "#00C1FF",
        fontWeight: "bold"
    },
    signIn: {
        color: "#00C1FF",
        fontWeight: "bold"
    }
})