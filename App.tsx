import { useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

import LoginStack from './src/navigators/stacks/LoginStack';
import HomeTab from './src/navigators/tab/Home.tab';

import { AuthContext, AuthProvider } from './src/context/Auth.context';
import { UserContext, UserProvider } from './src/context/User.context';
import { MsgProvider } from './src/context/Msg.context';
import { ServiceProvider } from './src/context/Service.context';
import { SearchProvider } from './src/context/Search.context';
import { ScheduleProvider } from './src/context/Schedule.context';

import { urlUserReLogin } from './src/interfaces/contexts/AuthContext.interface';
import SnackbarView from './src/components/Message/SnackbarView';
import { RequestPostReLogin } from './src/requests/Clients.requests';
import { LoadingScreen } from './src/components/Message/Loading';

const Navigator = () => {

  const { jwt, authLogin } = useContext(AuthContext);
    const { user, userUpdate } = useContext(UserContext);

    useEffect( () => {
      (async () => {
              const jsonEmail = await AsyncStorage.getItem('@Email');
              const email_ = jsonEmail != null ? JSON.parse(jsonEmail) : "";
      
              const jsonPassword = await AsyncStorage.getItem('@Password');
              const password_ = jsonPassword != null ? JSON.parse(jsonPassword) : "";

              const jsonToken = await AsyncStorage.getItem('@Token');
              let token_ = jsonToken != null ? JSON.parse(jsonToken) : "";

              if(token_ != ""){

                  fetch(urlUserReLogin,RequestPostReLogin({email: email_,password: password_,token:token_}))
                      .then(res => res.json())
                      .then(data => {authLogin(data.data.token); userUpdate(data.data.token)})
                      .catch(error => console.log("no internet"))
              }
      })();
  }, [jwt])

  return(
      <>
      <NavigationContainer>

      { !(jwt !== "") ? <LoginStack/> : <HomeTab/> }

      </NavigationContainer>
      <SnackbarView/>
      <LoadingScreen/>
      </>
  );
}

const App = () => {
  return (
    <MsgProvider>
      <UserProvider>
        <AuthProvider>
          <SearchProvider>
            <ServiceProvider>
              <ScheduleProvider>
                <Navigator/>
              </ScheduleProvider>
            </ServiceProvider>
          </SearchProvider>
        </AuthProvider>
      </UserProvider>
    </MsgProvider>
  );
}
export default App;