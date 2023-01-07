import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { RootHomeTabParamList } from '../../interfaces/navigators/paramList.interface';
import SearchStack from '../stacks/SearchStack';
import SchedulingStack from '../stacks/Scheduling.stack';
import WallStack from '../stacks/Wall.stack';

const Tab = createBottomTabNavigator<RootHomeTabParamList>();

import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

 const HomeTab = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="SearchStack" component={SearchStack}
                options={{ title:"Servicios", tabBarIcon: ({color}) => ( <Entypo name="list" size={24} color="black" />)}}   />
            <Tab.Screen name='SchedulingStack' component={SchedulingStack}
                options={{ title:"Calendario", tabBarIcon: ({color}) => ( <Feather name="calendar" size={24} color="black" />)}}   />
            <Tab.Screen name="WallStack" component={WallStack} 
                options={{ title:"Muro",tabBarIcon: ({color}) => ( <AntDesign name="form" size={24} color="black" />)}}   />
        </Tab.Navigator>
    );
}
export default HomeTab;