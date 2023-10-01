import React, { useState } from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/FirebaseInit";


const Login = () => {
    const [user, setUser] = useState()
    const auth = getAuth(app)
    console.log(auth)

    // eslint-disable-next-line no-unused-vars
    const provider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
       signInWithPopup(auth, provider)
       .then (result => {
        const loggedInUser = result.user
        console.log(loggedInUser)
        setUser(loggedInUser)
       }) 
       .catch(error => {
        console.log('Error', error.message)
       })
    }

    const handleSignOut = () => {
        signOut(auth,)
        .then(result => {
            console.log(result)
            setUser(null)
        })
        .catch(error =>{
            console.log(error)
        })
    }
    
    return (
        <div>

        {/* {user ? logout : sign in} */}

           { user ?
             <button onClick={handleSignOut} >Sign Out</button> :
             <button onClick={handleGoogleSignIn} >Google Login</button>
           }
            <div>
               <h1>User: {user?.displayName}</h1>
               <p>Email : {user?.email}</p>
              <img src={user?.photoURL} alt="" />
               
            </div>
        </div>
    );
};

export default Login;