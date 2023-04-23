import {Routes, Route, Switch, Router } from "react-router-dom";
import './App.css';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';


function App() {
  
  return (
    
		<Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/homepage" element={<HomePage/>} />
    </Routes>
  );
}

export default App;
