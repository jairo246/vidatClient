export interface TextInputRegisterPersonalInterface {
    setName: (name: string) => void;
    setRut: (rut: string) => void;
    setNationality: (nationality: string) => void;
    setBirthday: (birthday: string) => void;
}

export interface TextInputRegisterContactInterface {
    setEmail: (rut: string) => void;
    setPhone: (rut: string) => void;
    setAddress: (rut: string) => void;
}

export interface TextInputRegisterPasswordInterface {
    setPassword: (rut: string) => void;
}

export interface ButtonRegisterInterface {
    onLoginPress: () => void;
}