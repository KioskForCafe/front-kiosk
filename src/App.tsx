import './App.css';
import NavigationBar from './views/NavigationBar';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Main from './views/Main';
import AuthenticationView from './views/AuthenticationView';
import MyPageView from './views/MyPageView';
import { useStoresStore, useUserStore } from './stores';
import axios, { AxiosResponse } from 'axios';
import { GET_STORE_URL, GET_USER_URL, authorizationHeader } from './apis/constants/api';
import { useCookies } from 'react-cookie';
import ResponseDto from './apis/response';
import { GetUserResponseDto } from './apis/response/user';
import { useEffect } from 'react';
import UserInfomationModify from './views/UserInfomationModify';
import { GetStoreResponseDto } from './apis/response/store';

function App() {

  const path = useLocation();
  const pathSegments = path.pathname.split('/');
  const storeId = Number(pathSegments[1]);

  const {setStore} = useStoresStore();
  const { setUser } = useUserStore();
  const [ cookies ] = useCookies();

  const getStore = () => {
    if(isNaN(storeId)) return;
    axios.get(GET_STORE_URL(storeId))
    .then((response)=> getStoreResponseHandler(response))
    .catch((error)=>getStoreErrorHandler(error))
  }

  const getUser = (accessToken: string) => {
    axios.get(GET_USER_URL, authorizationHeader(accessToken))
    .then((response) => getUserResponseHandler(response))
    .catch((error) => getUserErrorHandler(error));
  }

  const getStoreResponseHandler = (response: AxiosResponse<any, any>)=> {
    const {data,message,result} = response.data as ResponseDto<GetStoreResponseDto>
    if(!result || !data){
      return;
    }
    setStore(data);
  }

  const getUserResponseHandler = (response: AxiosResponse<any, any>) => {
    const { result, message, data } = response.data as ResponseDto<any>;
    if (!result || !data) {
      return;
    }
    const user = data as GetUserResponseDto;  
    setUser(user);
  }

  const getStoreErrorHandler = (error: any) =>{
    console.log(error.message);
  }

  const getUserErrorHandler = (error: any) => {
    console.log(error.message);
  }

  useEffect(() => {
    const accessToken = cookies.accessToken;
    if (accessToken) getUser(accessToken);
    getStore()
  }, [path]);
  


  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path={`/${storeId}`} element={(<Main />)} />
        <Route path='/auth' element={(<AuthenticationView />)} />
        <Route path='/mypage' element={(<MyPageView />)}/>
        <Route path='/patch/user' element={(<UserInfomationModify />)}  />
      </Routes>
    </>
  );
}

export default App;
