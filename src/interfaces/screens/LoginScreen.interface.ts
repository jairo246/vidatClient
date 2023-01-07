export interface TextInputLoginInterface {
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
}

export interface ButtonLoginInterface {
    onLoginPress: (data: object) => void;
}

export interface ButtonRecoverInterface {
    onRecoverPress: () => void
}

export interface ButtonRegisterInterface {
    onRegisterPress: () => void
}

export interface NavigationButtons {
    onRecoverPress: () => void;
    onRegisterPress: () => void;
}