import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import twitterimg from "../../image/twiller.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleButton from "react-google-button";
import "./Login.css"


const Signup = () => {
  const [username, setusername] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [error, seterror] = useState("");
  const [password,setpassword]=useState("");
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    seterror("");
    try {
      
      const user = {
        username: username,
        name: name,
        email: email,
      };
     
    }catch (error) {
      seterror(error.message);
      window.alert(error.message);
    }
  };
  const hanglegooglesignin = async (e) => {
    e.preventDefault();
    try {
      
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
 
  return (
    <div>
      <>
      <div className='login-container'>
        <div className='image-container'>
          <img className="image" src={twitterimg} alt="twitterimg"/>
        </div>
        <div className='form-container'>
          <div className="">
            <TwitterIcon className='Twittericon' style={{color:"orange"}}/>
            <h2 className="heading">Happening Now !</h2>
            <div className='d-flex align-items-sm-center'>
              <h3 className='heading1'> Join Twiller Today</h3>
            </div>
            {error && <p className='errorMessage'>{error}</p>}
            <form onSubmit={handlesubmit}>
              <input className='display-name' style={{backgroundColor:"pink"}}
               type='username' placeholder='@username'
              onChange={(e)=>setusername(e.target.value)}/>
                <input className='display-name' style={{backgroundColor:"pink"}} 
                type='name' placeholder='Enter Full Name'
              onChange={(e)=>setname(e.target.value)}/>
              <input className='email' 
               type='email' placeholder='Email Address'
              onChange={(e)=>setemail(e.target.value)}/>
              <input className='password' 
               type='password' placeholder='password'
              onChange={(e)=>setpassword(e.target.value)}/>
              <div className='btn-login'>
                <button type='submit' className='btn'>
                  Signup

                </button>

              </div>
            
            </form>
            <hr/>
            <div className='google-button'>
              <GoogleButton className='g-btn' type='light' onClick={hanglegooglesignin}/>

            </div>
            <div>
              Already have an account?
              <Link to="/login" style={{textDecoration:"none",color:"var(--twitter-color)",
                fontWeight:"600",
                marginLeft:"5px"
              }}> Log In</Link>
            </div>

          </div>

        </div>

      </div>
      </>
      
    </div>
  )
}

export default Signup