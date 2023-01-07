import { useContext } from 'react';
import { MsgContext } from "../../context/Msg.context";
import { Snackbar } from 'react-native-paper'

const SnackbarView = () => {

    const { snackBar, onDismissSnackBar } = useContext(MsgContext);

    return(
        <Snackbar
            visible={snackBar.visible}
            onDismiss={onDismissSnackBar}
            action={{
                label: 'X',
                onPress: () => {
                    // Do something
                },
            }}>
            {snackBar.message}
        </Snackbar>
    );
}
export default SnackbarView;
