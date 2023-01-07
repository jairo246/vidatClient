import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import InfoServiceDetails from '../../components/InfoService/InfoServiceDetails';
import InfoServiceImages from '../../components/InfoService/InfoServiceImages';
import InfoServiceSchedule from '../../components/InfoService/InfoServiceSchedule';

const Tab = createMaterialTopTabNavigator();

const InfoServiceTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Details" component={InfoServiceDetails}  options={{ title:"Detalles"}}/>
            <Tab.Screen name='Images' component={InfoServiceImages}  options={{ title:"Imagenes"}}/>
            <Tab.Screen name='Schedule' component={InfoServiceSchedule}  options={{ title:"Horarios"}}/>
        </Tab.Navigator>
    );
}
export default InfoServiceTab;
