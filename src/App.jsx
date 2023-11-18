import { useEffect, useState } from 'react';

import 'firebase/auth';

import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import PageBody from "./components/PageBody";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from './firebase-config';

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';

const App = () => {

  const [userProfile, setUserProfile] = useState({
    loggedIn: false,
    username: ''
  });

  useEffect(() => {
    let user = auth.currentUser;

    if (user) {
      setUserProfile({
        loggedIn: true,
        username: user.displayName
      });
    } else {
      setUserProfile({
        loggedIn: false,
        username: ''
      });
    }
  }, [])

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then( (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        const token = credential.accessToken;
        setUserProfile({
          loggedIn: true,
          username: result.displayName
        });
    })
    .catch( (error) => {
        console.log(error);
    })
}

  const signOutWithGoogle = () => {
      signOut(auth)
      .then((result) => {
          console.log("Logged Out");   
          setUserProfile({
            loggedIn: false,
            username: ''
          });
      })
      .catch((error) => {
          console.log(error);
      })
  }

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