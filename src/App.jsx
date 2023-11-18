import { useEffect, useState } from 'react';

import 'firebase/auth';

import { signInWithGoogle, signOutWithGoogle } from './api/UserAPI';

import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import PageBody from "./components/PageBody";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase-config';



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
      <div className="header">
      <NavBar handleLogin={signInWithGoogle} handleLogout={signOutWithGoogle} userProfile={userProfile} />
      </div>
  )
}

export default App;