import { useContext } from 'react';
import './App.css';
import { MainCard } from './components/MainCard';
import { SideBar } from './components/SideBar';
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  const [{isDark}]=useContext(ThemeContext)
  return (
    <div className={isDark? "App1": "App"} >
    <SideBar/>
    <MainCard/>
    </div>
  );
}

export default App;