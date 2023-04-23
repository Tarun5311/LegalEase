import {Routes, Route, Switch, Router } from "react-router-dom";
import './App.css';
import LoginPage from './components/LoginPage';


function App() {
  
  return (
    
		<Routes>
      <Route path="/" element={<LoginPage/>}/>
    </Routes>
  );
}

export default App;
