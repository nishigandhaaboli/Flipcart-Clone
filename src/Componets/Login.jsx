import React, { useState } from 'react'
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import {useNavigate } from 'react-router-dom';
import './Login.css'

const Login = () => {

  const [userLogInData,setUserLogInData] = useState();
  console.log("userLogInData",userLogInData);
  const router = useNavigate();

  useEffect(()=>{
    if(userLogInData)
    {
      const registeredData = JSON.parse(localStorage.getItem("userData"));
      console.log(registeredData);
      if(registeredData)
      {
        if(registeredData.email === userLogInData.email && registeredData.password === userLogInData.password)
        {
          toast.success("Login Successful");
          localStorage.setItem("isUserLoggedIn","true");
          router("/");
        }
        else{
          toast.error("wrong credentials..")
        }
      }
      else{
        toast.error("not a user before.. please Register")
      }
    }
  },[userLogInData])

  function handleSubmit (e){
    e.preventDefault();
    alert("login working");
    setUserLogInData({
        email:"aboli@123",
        password:"123"
    })
  }
  return (
   <div id="screen2">

<div id="main1">
      <div id="left1">left</div>
      <div>
      <div id = "form1">
      <form onSubmit={handleSubmit}>
      <h1>Login Form</h1>
        <label>Email</label><br/>
        <input type='email' placeholder='Enter your Email'/><br/><br/>
        <label>Password</label><br/>
        <input type='password' placeholder='Enter password'/><br/><br/>
        <input type='submit'/><br/>
        <a href="./Register" style={{color:"blue"}}>Not User ? Register First</a>
      </form>
    </div>
      </div>
    </div>

   </div>
  )
}

export default Login
