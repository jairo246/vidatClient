import { AppointmentType } from '../../interfaces/screens/WallScreen.interface';

import { SituationSent } from './SituationState';
import { SituationAccept } from './SituationState';
import { SituationConfirm } from './SituationState';
import { SituationDone } from './SituationState';
import { SituationReject } from './SituationState';

const Appointment = ({
          scheduleItem,
          onDatePress}:AppointmentType) =>{
            
            switch(scheduleItem.state){

              case "SENT":
                  return <SituationSent scheduleItem={scheduleItem}/>;
              case "ACCEPT":
                  return <SituationAccept scheduleItem={scheduleItem}/>;
              case "CONFIRM":
                  return <SituationConfirm scheduleItem={scheduleItem}/>;
              case "DONE":
                  return <SituationDone scheduleItem={scheduleItem}/>;
              case "REJECT":
                    return <SituationReject scheduleItem={scheduleItem}/>;
              default:
                  return <SituationSent scheduleItem={scheduleItem}/>;
          } 
};
export default Appointment;