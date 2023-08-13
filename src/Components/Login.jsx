import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const navigate = useNavigate()

    useEffect(()=>{
       const auth = localStorage.getItem('user')
     if(auth){
        navigate('/')
     }
    },[])


    const logout = async () =>{
        console.log(email,password)
        let result = await fetch ("http://localhost:4000/login",{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{
                "Content-type":"application/json"
            }
        });
        result = await result.json()
        console.log(result)

        if(result.auth){
         localStorage.setItem('user',JSON.stringify(result.user))
         localStorage.setItem('token',JSON.stringify(result.auth))

         navigate('/')
         
         }
         else{
            alert('user not register')
         }
    }

  return (
    <>
    <div className='login'>
        <input type="text" className='inputbox' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='enter email' />
        <input type="password" className = 'inputbox'  value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='enter password' />
      

    </div>
     <button className='appButton' onClick={logout} type='button'>Login</button>
     </>
  )
}

export default Login