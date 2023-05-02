import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationBar from './views/NavigationBar';
import MainHead from './views/Main/MainHead';
import MainContents from './views/Main/MainContents';

function App() {
  return (
    <div>
      <NavigationBar />
      <MainHead />
      <MainContents />
    </div>
  );
}

export default App;
