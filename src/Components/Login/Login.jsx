import React, { useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/FirebaseInit";


const Login = () => {
    const [user, setUser] = useState()
    const auth = getAuth(app)
    console.log(auth)

    // eslint-disable-next-line no-unused-vars
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()


    const handleGoogleSignIn = () => {
       signInWithPopup(auth, googleProvider)
       .then (result => {
        const loggedInUser = result.user
        console.log(loggedInUser)
        setUser(loggedInUser)
       }) 
       .catch(error => {
        console.log('Error', error.message)
       })
    }

    const handleGithubSignIn = () =>  {

        signInWithPopup(auth, githubProvider)
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser)
            setUser(loggedUser)
        })
        .catch(error => {
            console.log(error)
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
            <>
                 <button onClick={handleGoogleSignIn} >Google Login</button>
                 <button onClick={handleGithubSignIn}>Github Login</button>
            </>
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