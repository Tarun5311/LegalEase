import {Routes, Route, Switch, Router } from "react-router-dom";
import './App.css';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import ProfilePage from "./components/ProfilePage";
import RowCard from "./components/RowCard";


function App() {
  const user = {
    name: 'John Doe',
    photoUrl: 'https://example.com/profile.jpg',
    qualification: 'Software Engineer',
    bio: 'I am a software engineer with 5 years of experience in web development.',
  };
  
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
