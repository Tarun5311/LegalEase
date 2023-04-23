import {Routes, Route, Switch, Router } from "react-router-dom";
import './App.css';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';


function App() {
  
  return (
    
		<Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>} />
    </Routes>
  );
}

export default App;
