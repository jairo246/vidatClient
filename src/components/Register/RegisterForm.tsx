import { useState } from 'react';
import {SafeAreaView, TextInput, View, Text } from "react-native";

import { TextInputRegisterPersonalInterface } from "../../interfaces/screens/RegisterScreen.interface";
import { TextInputRegisterContactInterface } from "../../interfaces/screens/RegisterScreen.interface";
import { TextInputRegisterPasswordInterface } from "../../interfaces/screens/RegisterScreen.interface";
import { ButtonRegisterInterface } from "../../interfaces/screens/RegisterScreen.interface";
import { ButtonRegister } from '../../queries/Register.query';
import RegisterStyle from "../../styles/Register.style";

const title = "Crear una cuenta"
const generalSubtitle = "Información personal"
const namePlaceHolder =  "Nombre completo";
const rutPlaceHolder =  "RUT  XXXXXXX-X";
const nationalityPlaceHolder = "Nacionalidad";
const birthdayPlaceHolder = "Fecha de nacimiento AAAA/MM/DD";

const TextInputPersonal = ({   setName,
                            setRut,
                            setNationality,
                            setBirthday}
                            :TextInputRegisterPersonalInterface) => (
    <View style={RegisterStyle.textInputContainer}>
        <Text style={RegisterStyle.title}> {title} </Text>
        <Text style={RegisterStyle.subtitle}> {generalSubtitle} </Text>
        <TextInput style={RegisterStyle.textBox}
                   placeholder={namePlaceHolder}
                   onChangeText={setName}
                   keyboardType={"ascii-capable"}
        />
        <TextInput style={RegisterStyle.textBox}
                   placeholder={rutPlaceHolder}
                   onChangeText={setRut}
                   keyboardType={"numeric"}
        />
        <TextInput style={RegisterStyle.textBox}
                   placeholder={nationalityPlaceHolder}
                   onChangeText={setNationality}
        />
        <TextInput style={RegisterStyle.textBox}
                   placeholder={birthdayPlaceHolder}
                   onChangeText={setBirthday}
        />
    </View>
);

const contactSubtitle = "Información de contacto"
const emailPlaceHolder =  "Correo electrónico";
const phonePlaceHolder =  "Teléfono";
const addressPlaceHolder = "Dirección";
const TextInputContact = ({   setEmail,
                              setPhone,
                              setAddress}
                               :TextInputRegisterContactInterface) => (
    <View style={RegisterStyle.textInputContainer}>
        <Text style={RegisterStyle.subtitle}> {contactSubtitle} </Text>
        <TextInput style={RegisterStyle.textBox}
                   placeholder={emailPlaceHolder}
                   onChangeText={setEmail}
        />
        <TextInput style={RegisterStyle.textBox}
                   placeholder={phonePlaceHolder}
                   onChangeText={setPhone}
                   keyboardType={"numeric"}
        />
        <TextInput style={RegisterStyle.textBox}
                   placeholder={addressPlaceHolder}
                   onChangeText={setAddress}
        />
    </View>
);

const passwordSubtitle = "Clave de seguridad"
const passwordPlaceHolder = "Contraseña"
const TextInputPassword = ({setPassword}:TextInputRegisterPasswordInterface) => (
    <View style={RegisterStyle.textInputContainer}>
        <Text style={RegisterStyle.subtitle}> {passwordSubtitle} </Text>
        <TextInput style={RegisterStyle.textBox}
                   placeholder={passwordPlaceHolder}
                   secureTextEntry
                   onChangeText={setPassword}
        />
    </View>
);


const Space = () => <View style={RegisterStyle.spaceStyle}/>

const RegisterForm = ({onLoginPress}:ButtonRegisterInterface ) => {
    const [name, setName] = useState<string>('');
    const [rut, setRut] = useState<string>('');
    const [nationality, setNationality] = useState<string>('');
    const [birthday, setBirthday] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [address, setAddress] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return(
        <SafeAreaView style={RegisterStyle.registerForm}>
            <TextInputPersonal
                setName={setName}
                setRut={setRut}
                setNationality={setNationality}
                setBirthday={setBirthday}
            />
            <TextInputContact
                setEmail={setEmail}
                setPhone={setPhone}
                setAddress={setAddress}
            />
            <TextInputPassword
                setPassword={setPassword}
            />
            <></>
            <ButtonRegister 
                name={name}
                rut={rut}
                nationality={nationality}
                birthday={birthday}
                email={email}
                phone={phone}
                address={address}
                password={password}
                onLoginPress={onLoginPress}
            />
            <Space/>
        </SafeAreaView>
    )
};

export default RegisterForm;