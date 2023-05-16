import './App.css';
import NavigationBar from './views/NavigationBar';
import MainHead from './views/Main/MainHead';
import MainContents from './views/Main/MainContents';
import MainOrder from './views/Main/MainOrder';
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from './views/Main';
import AuthenticationView from './views/AuthenticationView';
import MyPageView from './views/MyPageView';

function App() {

  const path = useLocation();

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={(<Main />)} />
        <Route path='/auth' element={(<AuthenticationView />)} />
        <Route path='/mypage' element={(<MyPageView />)}/>
      </Routes>
    </>
  );
}

export default App;
