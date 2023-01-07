import {createContext, useContext, useState} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    AuthContextMethod,
    authContextDefaultValues,
    AuthContextChildren } from "../interfaces/contexts/AuthContext.interface";

export const AuthContext = createContext<AuthContextMethod>(authContextDefaultValues);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: AuthContextChildren) => {
    const [jwt, setJwt] = useState<string>("");

    const authLoad = async () => {
        try {
            const jwtStored = await AsyncStorage.getItem('JWT');
            if (jwtStored != null) {
                setJwt(jwtStored);
            }
            return;
        } catch (error) {
            return error;
        }
    };
    const authLogin = async (token:string) => {
        try {
            await AsyncStorage.setItem('@Token', JSON.stringify(token));
            setJwt(token);
            return;
        } catch (error) {
            return error;
        }
    };
    const authLogout = async () => {
        try {
            await AsyncStorage.removeItem('@Token');
            await AsyncStorage.removeItem('@Email');
            await AsyncStorage.removeItem('@Password');
            setJwt("");
            return
        }
        catch (error) {
            return error;
        }
    };

    const value = {
        jwt,
        authLoad,
        authLogin,
        authLogout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}