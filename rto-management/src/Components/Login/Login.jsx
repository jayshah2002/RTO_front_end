import React from 'react';
import {useState} from 'react';
function Login() {
    const [disable,setdisable]=useState(true);
    
    return (
        <>
           <section className="signin">
                
                <form className="form">
                 
                    <input type="email" placeholder='Enter your Email'required/>
                    <input type="password" placeholder='Password' required/>
                    <input type="submit" disabled={disable}  value="Login" style={{ backgroundColor: "#a1eafb" }} />
                </form>
                </section>
        </>
    )
}

export default Login;