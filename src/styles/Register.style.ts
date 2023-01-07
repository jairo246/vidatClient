import {StyleSheet, Dimensions } from 'react-native';

const { width: ScreenWidth } = Dimensions.get("screen");

const RegisterStyle = StyleSheet.create({
    screen: {
        backgroundColor: 'white',
        width: ScreenWidth,
        height: "100%",
    },
    registerForm: {
        backgroundColor: 'white',
        marginTop: 40,
        marginBottom: 10,
        alignItems: 'center'
    },
    title: {
        color: "black",
        fontWeight: 'bold',
        fontSize: 30,
    },
    subtitle: {
        color: "#acabb0",
        fontWeight: 'bold',
        fontSize: 20,
    },
    textInputContainer: {
        backgroundColor: 'white',
        marginTop: 5,
        paddingLeft: 10,
    },
    textBox: {
        borderRadius: 5,
        width: ScreenWidth * 0.8,
        height: 40,
        margin: 10,
        borderWidth: 1,
        borderColor: "grey",
        padding: 10,
    },
    registerButtonStyle: {
        height: 40,
        width: ScreenWidth * 0.9,
        backgroundColor: "#25a9e2",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 32,
        elevation: 5,
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowColor: "#166080",
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
    registerTextStyle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    spaceStyle: {
        height: 6,
        marginTop: 12,
        marginBottom: 12,
        borderRadius: 16,
        width: ScreenWidth * 0.8,
        alignSelf: "center",
        backgroundColor: "white",
    },
});

export default RegisterStyle;