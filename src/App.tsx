import './App.css';
import NavigationBar from './views/NavigationBar';
import MainHead from './views/Main/MainHead';
import MainContents from './views/Main/MainContents';
import MainOrder from './views/Main/MainOrder';

function App() {
  return (
    <div>
      <NavigationBar />
      <MainHead />
      <MainContents item={undefined} />
      <MainOrder />
    </div>
  );
}

export default App;
