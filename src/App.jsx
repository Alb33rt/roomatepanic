import { useEffect, useState } from 'react';

import 'firebase/auth';

import { signInWithGoogle, signOutWithGoogle } from './api/UserAPI';

import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import PageBody from "./components/PageBody";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config';

import {BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';

const App = () => {

  const [userProfile, setUserProfile] = useState({
    loggedIn: false,
    username: ''
  });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserProfile({
        loggedIn: true,
        username: ''
      });
    } else {
      setUserProfile({
        loggedIn: false,
        username: ''
      });
    }
  })

  useEffect( () => {

    }
  , [userProfile]);

  return (
    <BrowserRouter>
      <NavBar handleLogin={signInWithGoogle} handleLogout={signOutWithGoogle} userProfile={userProfile} />
      <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tasks" element={<Tasks />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;