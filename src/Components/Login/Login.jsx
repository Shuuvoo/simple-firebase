import React from "react";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from "../../Firebase/FirebaseInit";


const Login = () => {
    const auth = getAuth(app)

    // eslint-disable-next-line no-unused-vars
    const provider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        console.log('google mama coming')
    }
    
    return (
        <div>
            <button onClick={handleGoogleSignIn} >Google Login</button>
        </div>
    );
};

export default Login;