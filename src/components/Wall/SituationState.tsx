import { View, Text } from 'react-native';
import { SituationType } from '../../interfaces/screens/WallScreen.interface';
import { PropertiesSchedulesType } from '../../interfaces/contexts/ScheduleContext.interface';

import { dayWeek, monthNames } from '../../constants/days';

import { ButtonPutState } from '../../queries/PutState.query';
import { ButtonDeleteContract } from '../../queries/DeleteSchedule.query';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import WallStyle from '../../styles/Wall.style';
import { color } from '../../constants/color';

const dateItem = (dayle: PropertiesSchedulesType) => {
    const startTime = new Date(dayle.start).getTime()
    const endTime = new Date(dayle.end).getTime()

    const start = new Date(startTime + 3*3600000)
    const end = new Date(endTime + 3*3600000)

    const dayWeek_ = start.getDay() != 0 ? dayWeek[start.getDay()-1] : dayWeek[6]
    const monthNames_ = monthNames[start.getMonth()]
    const dateMonth = String(start.getDate())

    const hourStart = String(start.getHours()).padStart(2, '0') + ':' + String(start.getMinutes()).padStart(2, '0')
    const hourEnd   = String(end.getHours()  ).padStart(2, '0') + ':' + String(  end.getMinutes()).padStart(2, '0')

    const result = " " + dayWeek_+ " " + dateMonth + " de " + monthNames_  + " " + hourStart + "-" + hourEnd;

    return result
}

export const SituationSent = ({scheduleItem}:SituationType) => {
    
    return(

        <View style={WallStyle.Item}>
            <View style={WallStyle.AppointmentIcon}>
                <View style={WallStyle.AppointmentIcon}>
                    <View style={WallStyle.Headers}>
                        <Text style={WallStyle.TextHeaders}>{"Enviado"}</Text>
                    </View>
                    <View style={WallStyle.Icon}>
                        <FontAwesome5 name="user-clock" size={40} color={color.hard_2} />
                    </View>
                    <View style={WallStyle.Footer}>
                        <Ionicons name="md-logo-usd" size={15} color={color.blue_2} />
                        <Text style={WallStyle.AppointmentTextFooter}>{scheduleItem.amount}</Text>
                    </View>
                </View>  
            </View>
            <View style={WallStyle.AppointmentInfo}>
                <View style={WallStyle.AppointmentHeader}>
                    <Text style={WallStyle.AppointmentTextTitle}>
                        {scheduleItem.description}
                    </Text>
                    <Text style={WallStyle.AppointmentTextTitle}>
                        {scheduleItem.place}
                    </Text>
                </View>
                <View style={WallStyle.AppointmentContent}>
                    <View style={WallStyle.AppointmentViewMain}>
                        <Text style={[WallStyle.AppointmentTextMain,{color:color.hard_2}]}>
                                {"Esperar Respuesta"}
                        </Text>
                    </View>
                </View>
                <View style={WallStyle.AppointmentFooter}>
                    <Ionicons name="ios-today" size={15} color={color.blue_2} />
                    <Text style={WallStyle.AppointmentTextFooter}>{dateItem(scheduleItem.dayle)}</Text>
                </View>
            </View>
        </View>
)};
export const SituationAccept = ({scheduleItem}:SituationType) => (

    <View style={WallStyle.Item}>
        <View style={WallStyle.AppointmentIcon}>
                <View style={WallStyle.Headers}>
                    <Text style={WallStyle.TextHeaders}>{"Aceptado"}</Text>
                </View>
                <View style={WallStyle.Icon}>
                    <FontAwesome5 name="user-check" size={40} color={color.blue_2} />
                </View>
                <View style={WallStyle.Footer}>
                    <Ionicons name="md-logo-usd" size={15} color={color.blue_2} />
                    <Text style={WallStyle.AppointmentTextFooter}>{scheduleItem.amount}</Text>
                </View>
        </View>
        <View style={WallStyle.AppointmentInfo}>
            <View style={WallStyle.AppointmentHeader}>
                <Text style={WallStyle.AppointmentTextTitle}>
                    {scheduleItem.description}
                </Text>
                <Text style={WallStyle.AppointmentTextTitle}>
                    {scheduleItem.place}
                </Text>
            </View>
            <View style={WallStyle.AppointmentContent}>
                <View style={WallStyle.AppointmentViewState}>
                            <ButtonPutState id={scheduleItem.id} state={"CONFIRM"} color={"green"} text={"Confirmar"}/>
                            <ButtonPutState id={scheduleItem.id} state={"REJECT"}  color={"red"} text={"Rechazar"}/>
                        </View>
                </View>
            <View style={WallStyle.AppointmentFooter}>
                <Ionicons name="ios-today" size={15} color={color.blue_2} />
                <Text style={WallStyle.AppointmentTextFooter}>{dateItem(scheduleItem.dayle)}</Text>
            </View>
        </View>
    </View>
);
export const SituationConfirm = ({scheduleItem}:SituationType) => (

    <View style={WallStyle.Item}>
        <View style={WallStyle.AppointmentIcon}>
            <View style={WallStyle.Headers}>
                <Text style={WallStyle.TextHeaders}>{"Confirmado"}</Text>
            </View>
            <View style={WallStyle.Icon}>
                <FontAwesome name="handshake-o" size={40} color={color.hard_2}/>
            </View>
            <View style={WallStyle.Footer}>
                <Ionicons name="md-logo-usd" size={15} color={color.blue_2} />
                <Text style={WallStyle.AppointmentTextFooter}>{scheduleItem.amount}</Text>
            </View>
        </View>
        <View style={WallStyle.AppointmentInfo}>
            <View style={WallStyle.AppointmentHeader}>
                <Text style={WallStyle.AppointmentTextTitle}>
                    {scheduleItem.description}
                </Text>
                <Text style={WallStyle.AppointmentTextTitle}>
                    {scheduleItem.place}
                </Text>
            </View>
            <View style={WallStyle.AppointmentContent}>
                <View style={WallStyle.AppointmentViewMain}>
                    <Text style={[WallStyle.AppointmentTextMain,{color:color.hard_2}]}>
                            {"Esperar la fecha de citación"}
                    </Text>
                </View>
            </View>
            <View style={WallStyle.AppointmentFooter}>
                <Ionicons name="ios-today" size={15} color={color.blue_2} />
                <Text style={WallStyle.AppointmentTextFooter}>{dateItem(scheduleItem.dayle)}</Text>
            </View>
            
        </View>
    </View>
);
export const SituationDone = ({scheduleItem}:SituationType) => (

    <View style={WallStyle.ItemShort}>
        <View style={WallStyle.AppointmentIcon}>
            <View style={WallStyle.Icon}>
                <Ionicons name="ribbon-sharp" size={40} color={color.hard_3} />
            </View>
        </View>
        <View style={WallStyle.AppointmentInfo}>
            <View style={WallStyle.AppointmentContent}>
                <View style={WallStyle.AppointmentViewMain}>
                    <Text style={WallStyle.AppointmentTextMain}>
                            { "Terminado"}
                    </Text>
                </View>
            </View>
        </View>
    </View>
);
export const SituationReject = ({scheduleItem}:SituationType) => <ButtonDeleteContract contractId={scheduleItem.contractId} />