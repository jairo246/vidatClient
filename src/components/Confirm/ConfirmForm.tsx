import { useContext } from 'react';
import { View, Text } from 'react-native';

import { ServiceContext } from '../../context/Service.context';
import { ScheduleContext } from '../../context/Schedule.context';

import { PropertiesSchedulesDateType } from '../../interfaces/contexts/ScheduleContext.interface';
import { dayWeek, monthNames } from '../../constants/days';
import ConfirmStyle from '../../styles/Confirm.style';

const dateAtention = (dayle: PropertiesSchedulesDateType) => {

    const start = new Date(dayle.start.getTime() + 3*3600000)

    const dayWeek_ = start.getDay() != 0 ? dayWeek[start.getDay()-1] : dayWeek[6]
    const dateMonth = String(start.getDate())

    const result = " " + dayWeek_+ " " + dateMonth;

    return result
}
const monthAtention = (dayle: PropertiesSchedulesDateType) => {

    const start = new Date(dayle.start.getTime() + 3*3600000)

    const monthNames_ = monthNames[start.getMonth()]

    return monthNames_
}

const HourAtention = (dayle: PropertiesSchedulesDateType) => {

    const start = new Date(dayle.start.getTime() + 3*3600000)
    const end = new Date(dayle.end.getTime() + 3*3600000)

    const hourStart = String(start.getHours()).padStart(2, '0') + ':' + String(start.getMinutes()).padStart(2, '0')
    const hourEnd   = String(end.getHours()  ).padStart(2, '0') + ':' + String(end.getMinutes()  ).padStart(2, '0')

    const result = hourStart + "-" + hourEnd;

    return result
}


const ConfirmForm = () => {

    const title = "Nuevo Cita";
    const generalSubtitle1 = "Información general";
    const titleKey = "Servicio";
    const name = "Nombre";
    const unitCostKey = "Costo de la atención";
    const currencyKey = "Moneda";
    const generalSubtitle2 = "Información de la Cita";
    const specialtyKey = "Especialidad";
    const locationKey = "Ubicación";
    const officeDay = "Dia de Atención";
    const officeMonth = "Mes de Atención";
    const officeHours = "Horario de Atención";

    const { serviceInfo } = useContext(ServiceContext)
    const { newSchedule } = useContext(ScheduleContext)

    return (
        <View style={ConfirmStyle.textInputContainer}>
            <Text style={ConfirmStyle.title}> {title} </Text>
            <Text style={ConfirmStyle.subtitle}> {generalSubtitle1} </Text>
            <View  style={ConfirmStyle.row}>
                <Text style={ConfirmStyle.textKey}> {titleKey} </Text>
                <Text style={ConfirmStyle.textValue}> {newSchedule.description} </Text>
            </View>
            <View  style={ConfirmStyle.row}>
                <Text style={ConfirmStyle.textKey}> {specialtyKey} </Text>
                <Text style={ConfirmStyle.textValue}> {serviceInfo.specialty} </Text>
            </View>
            <View  style={ConfirmStyle.row}>
                <Text style={ConfirmStyle.textKey}> {name} </Text>
                <Text style={ConfirmStyle.textValue}> {serviceInfo.provider.name} </Text>
            </View>
            
            <Text style={ConfirmStyle.subtitle}> {generalSubtitle2} </Text>
            <View  style={ConfirmStyle.row}>
                <Text style={ConfirmStyle.textKey}> {unitCostKey} </Text>
                <Text style={ConfirmStyle.textValue}> {newSchedule.amount} </Text>
            </View>
            <View  style={ConfirmStyle.row}>
                <Text style={ConfirmStyle.textKey}> {currencyKey} </Text>
                <Text style={ConfirmStyle.textValue}> {newSchedule.payment} </Text>
            </View>
            <View  style={ConfirmStyle.row}>
                <Text style={ConfirmStyle.textKey}> {locationKey} </Text>
                <Text style={ConfirmStyle.textValue}> {newSchedule.place} </Text>
            </View>
            <View  style={ConfirmStyle.row}>
                <Text style={ConfirmStyle.textKey}> {officeDay} </Text>
                <Text style={ConfirmStyle.textValue}> {dateAtention(newSchedule.dayle)} </Text>
            </View>
            <View  style={ConfirmStyle.row}>
                <Text style={ConfirmStyle.textKey}> {officeMonth} </Text>
                <Text style={ConfirmStyle.textValue}> {monthAtention(newSchedule.dayle)} </Text>
            </View>
            <View  style={ConfirmStyle.row}>
                <Text style={ConfirmStyle.textKey}> {officeHours} </Text>
                <Text style={ConfirmStyle.textValue}> {HourAtention(newSchedule.dayle)} </Text>
            </View>
        </View>
    );
}
export default ConfirmForm;