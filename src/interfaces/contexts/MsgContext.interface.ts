import { ReactNode } from "react";

export type SnackbarType = {
    visible: boolean;
    message: string;
};

export const SnackbarDefault:SnackbarType = {
    visible: false,
    message: ""
};
export type LoadingType = {
    screen: boolean;
    view: boolean;
}
export const LoadingDefault:LoadingType = {
    screen: false,
    view: false
}
export type MsgContextMethod = {
    snackBar: SnackbarType;
    loading: LoadingType;
    showMsg(message: string): void
    onDismissSnackBar: () => void;
    errorCatch:() => void;
    loadingScreen:(boolean:boolean) => void;
    loadingView:(boolean:boolean) => void;
};

export const MsgContextDefaultValues: MsgContextMethod = {
    snackBar: SnackbarDefault,
    loading: LoadingDefault,
    showMsg(message) {},
    onDismissSnackBar:()  => {},
    errorCatch:() => {},
    loadingScreen:(boolean) => {},
    loadingView:(boolean) => {}
};

export type MsgContextChildren = {
    children: ReactNode;
};