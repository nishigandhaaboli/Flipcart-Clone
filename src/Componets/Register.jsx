import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import './Login.css'

const Register = () => {
     const [userData,setUserData] = useState();

    useEffect(()=>{
        console.log("UserData Updated..")
        const toStoreUserData = JSON.stringify(userData);
        if(userData){
            localStorage.setItem("userData",toStoreUserData);
            toast.success("submitted..!");
            // toast.error("Not submittad..")

        }
        // else{
        // }
    },[userData])

    function handleSubmit(e){
        e.preventDefault();
        // alert("submitted");
        setUserData({
            name:"Nishigandha",
            email:"aboli@123",
            password:"123"
        })
        console.log("UserData",userData)
    }
  return (
   <div id ="screen2">
    <div id="main1">
    <div id="left1">
      
    </div>
    <div id = "form1">
      <form onSubmit={handleSubmit}>
      <h1>Registration Form</h1>
        <label>Name</label><br/>
        <input type='text' placeholder='Enter your Name'/><br/><br/>
        <label>Email</label><br/>
        <input type='email' placeholder='Enter your Email'/><br/><br/>
        <label>Password</label><br/>
        <input type='password' placeholder='Enter password'/><br/><br/>
        <input type='submit'/><br/>
        <a href="./Login" style={{color:"blue"}}>Already User ? Login</a>
      </form>
    </div>

   </div>
   </div>
  )
}

export default Register
