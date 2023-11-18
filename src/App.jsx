import { useEffect, useState } from 'react';

import 'firebase/auth';

import { signInWithGoogle } from './firebase-config';

import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import PageBody from "./components/PageBody";



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
      <div className="header">
      <NavBar handleLogin={signInWithGoogle} userProfile={userProfile} />
      </div>
  )
}

export default App;