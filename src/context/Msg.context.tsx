import { createContext, useContext, useState } from "react";

import { MsgContextMethod, MsgContextDefaultValues } from "../interfaces/contexts/MsgContext.interface";
import { MsgContextChildren } from "../interfaces/contexts/MsgContext.interface";
import { SnackbarType, SnackbarDefault }  from "../interfaces/contexts/MsgContext.interface";
import { LoadingType, LoadingDefault }  from "../interfaces/contexts/MsgContext.interface";

export const MsgContext = createContext<MsgContextMethod>(MsgContextDefaultValues);

export const useMainContext = () => useContext(MsgContext);

export const MsgProvider = ({ children }: MsgContextChildren) => {
    const [snackBar, setSnackBar] = useState<SnackbarType>(SnackbarDefault);
    const [loading, setLoading] = useState<LoadingType>(LoadingDefault);

    const showMsg = (message: string) =>    setSnackBar({message: message, visible:true})
    const onDismissSnackBar = () =>         setSnackBar({...snackBar, visible:false});
    const errorCatch = () =>                setSnackBar({...snackBar, message: "Error no tienes internet", visible:true});
    
    const loadingScreen = (boolean:boolean) => setLoading({...loading,screen:boolean})
    const loadingView = (boolean:boolean) => setLoading({...loading,view:boolean})
    
    const value = {
        snackBar,
        loading,
        onDismissSnackBar,
        showMsg,
        errorCatch,
        loadingScreen,
        loadingView
    };
    return (
        <MsgContext.Provider value={value}>
            {children}
        </MsgContext.Provider>
    );
}
