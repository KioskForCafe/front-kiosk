import './App.css';
import NavigationBar from './views/NavigationBar';
import MainHead from './views/Main/MainHead';
import MainContents from './views/Main/MainContents';
import MainOrder from './views/Main/MainOrder';
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from './views/Main';

function App() {

  const path = useLocation();

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={(<Main />)} />
      </Routes>
    </>
  );
}

export default App;
