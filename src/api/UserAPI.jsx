import { firebase, auth, provider } from '../firebase-config';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then( (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        const token = credential.accessToken;
        console.log(result);
    })
    .catch( (error) => {
        console.log(error);
        return error;
    })
}

export const signOutWithGoogle = () => {
    signOut(auth)
    .then((result) => {
        console.log("Logged Out");    
    })
    .catch((error) => {
        console.log(error);
    })
}