import { LoginUserTypeInput } from "../interfaces/queries/LoginQuery.interface";
import { ReLoginUserTypeInput } from "../interfaces/requests/ClientsRequests.interface";
import { CreateUserTypeInput } from "../interfaces/queries/RegisterQuery.interface";
import { RecoverUserTypeInput } from "../interfaces/queries/RecoverQuery.interface";
import { UpdateUserTypeInput } from "../interfaces/queries/ProfileQuery.interface";

export const RequestPostLogin = (login:LoginUserTypeInput) => {

    const data = {
        email: login.email,
        password: login.password
    }
    const requestOptions: RequestInit = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    }; // parses JSON response into native JavaScript objects

    return requestOptions;
}
export const RequestPostReLogin = (login:ReLoginUserTypeInput) => {

    const typeToken = "Bearer "
    const accesToken = login.token;

    const acceso = typeToken + accesToken;
  
    const myHeaders = new Headers();
    
    myHeaders.append("Authorization", acceso);
    myHeaders.append("Content-Type", 'application/json');

    const data = {
        email: login.email,
        password: login.password
      }
    const requestOptions: RequestInit = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
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
export const RequestGetLogin = (token_:string) => {

    const accesToken = token_;

    const acceso = accesToken;;
  
    const myHeaders = new Headers();
    
    myHeaders.append("Authorization", acceso);
    
    const requestOptions: RequestInit = {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: myHeaders,
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //body: JSON.stringify(data) // body data type must match "Content-Type" header
    }; // parses JSON response into native JavaScript objects

    return requestOptions;
}
export const RequestPostCreate = (register:CreateUserTypeInput) => {

    const data = {
        name: register.name,
        rut: register.rut,
        email: register.email,
        phone: register.phone,
        nationality: register.nationality,
        address: register.address,
        birthday: register.birthday,
        password: register.password
      }

      const requestOptions: RequestInit = {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            //'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data)
    }; // parses JSON response into native JavaScript objects

    return requestOptions;
}
export const RequestPutRecover = (recover:RecoverUserTypeInput) => {

    const data = {
        email: recover.email,
        password: recover.password
    };

    const requestOptions: RequestInit = {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    }; // parses JSON response into native JavaScript objects

    return requestOptions;
}
export const RequestPutUpdate = (update:UpdateUserTypeInput) => {

    const data = {
        relationalId: update.relationalId,
        name: update.name,
        photo: update.photo
    };

    const requestOptions: RequestInit = {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    }; // parses JSON response into native JavaScript objects

    return requestOptions;
}
export const RequestPutPhoto = (token:string,photo:string) => {

    const content = photo;
    const token_ = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MiwibmFtZSI6IkphaXJvIE1vcmVubyAiLCJydXQiOiIxODU2MjU1OCIsIm5hdGlvbmFsaXR5IjoiQ2hpbGVubyAiLCJiaXJ0aGRheSI6IjE5OTMtMDktMjNUMDA6MDA6MDAuMDAwWiIsImVtYWlsIjoiamFpcm9AZ21haWwuY29tICIsInBob25lIjoiOTY4MDU0MjU0IiwiYWRkcmVzcyI6IlZpw7FhIGRlbCBNYXIiLCJwcm9wZXJ0aWVzIjp7IndvcmsiOltdLCJwaG90byI6InByb3ZpZGVyXzJfd2RtLnBuZyIsImFncmVlbWVudCI6W10sImVkdWNhdGlvbiI6W10sImRlc2NyaXB0aW9uIjoiIn0sImV4cCI6MTY2Mzc4OTI5M30.VC7c_mSLhocd9s2stZLFJYFLuLQcEpqRa9tsRq6V8dk"
    const myHeaders = new Headers();
    const blob = new Blob([content], { type: "File/xml"});
    let formData = new FormData();
    
    myHeaders.append("Authorization", token_);
    myHeaders.append("Content-Type", 'multipart/form-data');
    formData.append("file", blob);
    
    const requestOptions: RequestInit = {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        //mode: 'no-cors', // no-cors, *cors, same-origin
        //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: 'same-origin', // include, *same-origin, omit
        headers: myHeaders,
        //redirect: 'follow', // manual, *follow, error
        //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(formData) // body data type must match "Content-Type" header
    }; // parses JSON response into native JavaScript objects

    return requestOptions;
}
export const RequestGetUserData = (token:string) => {
    const typeToken = "Bearer "
    const access = typeToken + token;
    const myHeaders = new Headers();
    myHeaders.append("Authorization", access);
    myHeaders.append("Content-Type", 'application/json');

    const requestOptions: RequestInit = {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: myHeaders,
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //body: JSON.stringify({}) // body data type must match "Content-Type" header
    }; // parses JSON response into native JavaScript objects

    return requestOptions;

}