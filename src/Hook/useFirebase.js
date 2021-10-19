import {useEffect, useState} from 'react'
import initializeAuth from '../Firebase/Firebaseinit';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut   } from "firebase/auth";



initializeAuth();

const useFirebase = () => {
    const [users,setuser] = useState({});
    const [error,seterror] = useState('');

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const signinWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
     const user = result.user;
     setuser(user);
    })
     .catch((error) => {
        seterror(error)
     })

    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
             setuser(user)
            }
          })

    }, [auth])

    const signouts = () => {
        signOut(auth)
        .then(() => {
           console.log("Sign-out successful");
           setuser({});
          })
          .catch((error) => {
            console.log(error);
          });
    }

    return {
        users,
        error,
        signinWithGoogle,
        signouts
    }
    
};

export default useFirebase;