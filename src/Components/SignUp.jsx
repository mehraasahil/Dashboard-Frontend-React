import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const SingUp = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const navigate =  useNavigate();

    
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth){
            navigate('/')
        }
        
    },[])
    
	const collectData = async () => {
		console.log(name, email, password);

        let result = await fetch('http://localhost:4000/register',{
            method :'post',
            body:JSON.stringify({name,email,password}),
            headers:{
                'Content-Type':'application/json'
            },
    });

    result = await result.json()
    console.log(result)
    localStorage.setItem('user',JSON.stringify(result))
    navigate('/')
    
}
	return (
		<>
			<h1>Register</h1>
			<div className="register">
				<input type="text" className="inputbox" value={name} onChange={((e)=>setName(e.target.value))} placeholder="enter the name" />
				<input type="email" className="inputbox" value={email} onChange={((e)=>setEmail(e.target.value))} placeholder="enter the email" />
				<input type="password" className="inputbox" value={password} onChange={((e)=>setPassword(e.target.value))} placeholder="enter the password" />


			</div>
			<button onClick={collectData} className="appButton" type="button">
				Sign Up
			</button>
		</>
	);
};


export default SingUp;