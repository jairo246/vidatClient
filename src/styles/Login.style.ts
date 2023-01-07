import {StyleSheet, Dimensions } from 'react-native';

const { width: ScreenWidth } = Dimensions.get("screen");

const LoginStyle = StyleSheet.create({
    spaceStyle: {
        height: 6,
        marginTop: 12,
        marginBottom: 12,
        borderRadius: 16,
        width: ScreenWidth * 0.8,
        alignSelf: "center",
        backgroundColor: "white",
    },
    dividerStyle: {
        height: 0.5,
        marginTop: 24,
        marginBottom: 12,
        borderRadius: 16,
        width: ScreenWidth * 0.8,
        alignSelf: "center",
        backgroundColor: "white",
    },
    screen: {
        backgroundColor: 'white',
        width: ScreenWidth,
        height: "100%",
    },
    loginForm: {
        backgroundColor: 'white',
        marginTop: 75,
        marginBottom: 10,
        alignItems: 'center'
    },
    logo: {
        height: ScreenWidth * 0.5,
        resizeMode: "contain"
    },
    textInputContainer: {
        backgroundColor: 'white',
        marginTop: 12,
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
    loginButtonStyle: {
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
    loginTextStyle: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    stackNavigationButtons: {
        backgroundColor: 'white',
        marginTop: 5,
        marginBottom: 10,
        alignItems: 'center'
    },
    recoverButtonStyle: {
        height: 40,
        width: ScreenWidth * 0.9,
        backgroundColor: "white",
        borderRadius: 8,
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        elevation: 5,
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowColor: "#166080",
        shadowOffset: {
            width: 0,
            height: 3,
        },
    },
    recoverTextStyle: {
        color: "#acabb0",
        fontSize: 16,
        fontWeight: "bold",
    },
    registerButtonStyle: {
        height: 40,
        width: ScreenWidth * 0.9,
        backgroundColor: "white",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
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
        color: "#acabb0",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default LoginStyle;