import { firebase, auth, provider } from '../firebase-config';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then( (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        const token = credential.accessToken;
    })
    .catch( (error) => {
        console.log(error);
    })
}

export const signOutWithGoogle = () => {
    let success = false;
    signOut(auth)
    .then((result) => {
        console.log("Logged Out");   
        success = true; 
    })
    .catch((error) => {
        console.log(error);
    })
}