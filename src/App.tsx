import './App.css';
import NavigationBar from './views/NavigationBar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from './views/Main';
import AuthenticationView from './views/AuthenticationView';
import MyPageView from './views/MyPageView';
import { useUserStore } from './stores';
import axios, { AxiosResponse } from 'axios';
import { GET_USER_URL, authorizationHeader } from './apis/constants/api';
import { useCookies } from 'react-cookie';
import ResponseDto from './apis/response';
import { GetUserResponseDto } from './apis/response/user';
import { useEffect } from 'react';
import UserInfomationModify from './views/UserInfomationModify';

function App() {

  const path = useLocation();

  const { setUser } = useUserStore();
  const [ cookies ] = useCookies();

  const getUser = (accessToken: string) => {
    axios.get(GET_USER_URL, authorizationHeader(accessToken))
    .then((response) => getUserResponseHandler(response))
    .catch((error) => getUserErrorHandler(error));
  }

  const getUserResponseHandler = (response: AxiosResponse<any, any>) => {
    const { result, message, data } = response.data as ResponseDto<any>;
    if (!result || !data) {
      return;
    }
    const user = data as GetUserResponseDto;
    setUser(user);
  }

  const getUserErrorHandler = (error: any) => {
    console.log(error.message);
  }

  useEffect(() => {
    const accessToken = cookies.accessToken;
    if (accessToken) getUser(accessToken);
  }, [path]);

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={(<Main />)} />
        <Route path='/auth' element={(<AuthenticationView />)} />
        <Route path='/mypage' element={(<MyPageView />)}/>
        <Route path='/patch/user' element={(<UserInfomationModify />)}  />
      </Routes>
    </>
  );
}

export default App;
