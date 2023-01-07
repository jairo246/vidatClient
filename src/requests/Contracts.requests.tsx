import { NewSchedulesType } from "../interfaces/contexts/ScheduleContext.interface";

export const RequestContractPostState = (newSchedule:NewSchedulesType, token:string) => {

    const typeToken = "Bearer ";
    const accesToken = token;
    const acceso = typeToken + accesToken;
    const myHeaders = new Headers();
    
    myHeaders.append("Authorization", acceso);
    myHeaders.append("Content-Type", 'application/json');
  
    const data = {
          place: newSchedule.place,
          description: newSchedule.description,
          payment: newSchedule.payment,
          amount: newSchedule.amount
      }
  
      const requestOptions: RequestInit = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: myHeaders,
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data)
    }; // parses JSON response into native JavaScript objects
  
    return requestOptions;
  }
export const RequestAppointmentsDelete = (token:string,contractId: number) => {

    const typeToken = "Bearer "
    const accessToken = token;
    const access = typeToken + accessToken;
    const myHeaders = new Headers();
  
    myHeaders.append("Authorization", access);
    myHeaders.append("Content-Type", 'application/json');
  
    const data = {
        id:   contractId,
    };
    
    const requestOptions: RequestInit = {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: myHeaders,
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    }; // parses JSON response into native JavaScript objects
  
    return requestOptions;
  }