import {useEffect, useState} from 'react'
import initializeAuth from '../Firebase/Firebaseinit';
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";

initializeAuth();


const useFirebase = () => {

    const [users,setuser] = useState({});
    const [error,seterror] = useState('');
    const[email,setemail] = useState('');
    const[password,setpassword] = useState('');


    const [isLoading,setLoading] = useState(true);

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    
    const SignUpwithGoogle = ()=> {
      setLoading(true)
      return signInWithPopup(auth, provider)
 }


    const hanglesignup = (e) => {
        e.preventDefault()
      
        if(password.length < 6){
          seterror("Pass Must be 6")
          return;
        }
      
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
          seterror('')
          setuser(result.user)
        })
        .catch(() => {
         seterror('Email Already Used')
        });
        
      }

      const hanglelogin = (e) => {
        e.preventDefault()
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        })
        .catch((error) => {
          seterror("Pasword or Email is wrong")
        });
      }


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
             setuser(user)
            } 
            else{
              setuser({})
            }
            setLoading(false)
          })

    }, [auth])

    const signouts = () => {
      setLoading(true)
        signOut(auth)
        .then(() => {
           setuser({});
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() =>  setLoading(false));
    }

    return {
        users,
        error,
        signouts,
        setemail,
        setpassword,
        hanglesignup,
        hanglelogin,
        seterror,
        email,
        password,
        SignUpwithGoogle,
        setLoading,
        isLoading
    }
    
};

export default useFirebase;