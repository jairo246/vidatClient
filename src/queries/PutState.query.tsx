import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import { AuthContext } from "../context/Auth.context";
import { MsgContext } from "../context/Msg.context";
import { ScheduleContext } from "../context/Schedule.context";

import { urlShowAppointments } from "../interfaces/requests/ShedulesRequests.interface";
import { ButtonTypeInput ,StateTypeInput, StateTypeOutput, urlDateState } from "../interfaces/queries/PutStateQuery.interface";
import { RequestAppointmentsGetShow, RequestAppointmentPuTState } from "../requests/Schedules.requests";
import WallStyle from "../styles/Wall.style";

export const ButtonPutState = (buttonState:ButtonTypeInput) => {

    const stateButtonText= buttonState.text
    const { jwt } = useContext(AuthContext);
    const { showMsg, errorCatch, loadingView } = useContext(MsgContext);
    const { updateClient } = useContext(ScheduleContext);

    const putStateConclusion = (res:StateTypeOutput) => {

        if(res.status == 200){

            //// update list service ////
            fetch(urlShowAppointments,RequestAppointmentsGetShow(jwt))
            .then(res => res.json())
            .then(data => {updateClient(data.data); loadingView(false)})
            .catch(error => {errorCatch(); loadingView(false)})

            showMsg(res.data.message);
        }
        else{
            showMsg(res.data.error);
        }
    }

    const PutState = (dateState_:StateTypeInput) => {
    
        loadingView(true)
        fetch(urlDateState,RequestAppointmentPuTState({id:dateState_.id, state: dateState_.state},jwt))
        .then(res => res.json())
        .then(data => putStateConclusion(data))
        .catch(error => {errorCatch(); loadingView(false)})
}

    return(
        <TouchableOpacity
            style={[WallStyle.AppointmentTouchState, { backgroundColor: buttonState.color }]}
            onPress={() => PutState({
                        id: buttonState.id,
                        state: buttonState.state
            })}
        >
            <Text style={WallStyle.AppointmentTextState}>
                {stateButtonText}
            </Text>
        </TouchableOpacity>
    )
};