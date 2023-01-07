import { StateTypeInput } from "../interfaces/queries/PutStateQuery.interface";
import { NewSchedulesType } from "../interfaces/contexts/ScheduleContext.interface";

export const RequestAppointmentsGetShow = (token:string) => {

    const typeToken = "Bearer ";
    const accesToken = token;
    const acceso = typeToken + accesToken;
    const myHeaders = new Headers();
    
    myHeaders.append("Authorization", acceso);
    myHeaders.append("Content-Type", 'application/json');

      const requestOptions: RequestInit = {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: myHeaders,
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //body: JSON.stringify(data)
    }; // parses JSON response into native JavaScript objects

    return requestOptions;
}
export const RequestAppointmentPuTState = (data_:StateTypeInput, token:string) => {

  const typeToken = "Bearer ";
  const accesToken = token;
  const acceso = typeToken + accesToken;
  const myHeaders = new Headers();
  
  myHeaders.append("Authorization", acceso);
  myHeaders.append("Content-Type", 'application/json');

  const data = {
      id: data_.id,
      state: data_.state
    }

    const requestOptions: RequestInit = {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
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
export const RequestAppointmentPostState = (contractId:number,newSchedule:NewSchedulesType , token:string) => {

  const typeToken = "Bearer ";
  const accesToken = token;
  const acceso = typeToken + accesToken;
  const myHeaders = new Headers();
  
  myHeaders.append("Authorization", acceso);
  myHeaders.append("Content-Type", 'application/json');

  const data = {
    state: newSchedule.state,
    properties: newSchedule.dayle,
    serviceId: newSchedule.serviceId,
    contractId: contractId
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
export const RequestGetShowId = (token:string) => {

  const typeToken = "Bearer ";
  const accesToken = token;
  const acceso = typeToken + accesToken;
  const myHeaders = new Headers();
  
  myHeaders.append("Authorization", acceso);
  myHeaders.append("Content-Type", 'application/json');

    const requestOptions: RequestInit = {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: myHeaders,
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      //body: JSON.stringify(data)
  }; // parses JSON response into native JavaScript objects

  return requestOptions;
}