
export const RequestFilter = (specialty_:string, location_:string, token:string) => {

    const typeToken = "Bearer ";
    const accesToken = token;
    const acceso = typeToken + accesToken;
    const myHeaders = new Headers();
    
    myHeaders.append("Authorization", acceso);
    myHeaders.append("Content-Type", 'application/json');
  
    const data = {
        specialty: specialty_,
        location: location_
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