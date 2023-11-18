import { useEffect, useState } from 'react';

import 'firebase/auth';

import { signInWithGoogle } from './firebase-config';

import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import PageBody from "./components/PageBody";

import {BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';

const App = () => {

  const [userProfile, setUserProfile] = useState({
    loggedIn: true,
    username: ''
  });

  useEffect( () => {
    console.log(userProfile);
    }
  , [userProfile]);

  return (
    <BrowserRouter>
    <NavBar handleLogin={signInWithGoogle} userProfile={userProfile} />
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
    </Routes>

    </BrowserRouter>

  );
}

export default App;