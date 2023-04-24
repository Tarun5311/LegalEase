import {Routes, Route} from "react-router-dom";
import './App.css';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import ProfilePage from "./components/ProfilePage";


function App() {
  
  return (
		<Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/homepage" element={<HomePage/>} />
      <Route path="/search" element={<SearchPage/>} />
      <Route path="/profile" element={<ProfilePage/>} />
    </Routes>
  );
}

export default App;
