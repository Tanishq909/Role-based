import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Register from './Register';
import { post } from '../services/ApiEndPoint';
import { toast } from "react-hot-toast";
import { useDispatch } from 'react-redux';
import { SetUser } from '../redux/AuthSlice';

export default function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]= useState("");
    const dispatch = useDispatch();
    const navigate=useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); //page ko refresh hone se bachta  hai ye
        console.log(email,password)
        try {
            const request = await post('/api/auth/login',{email,password});
            const response = request.data;
            if (request.status==200) {
                if (response.user.role =='admin') {
                  navigate('/admin')
                }else if (response.user.role =='user') {
                   navigate('/')
                }
                toast.success(response.message)
                dispatch(SetUser(response.user))
              }
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
       <div className="login-container">
           <h2>Login</h2>
           <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="Email">Email</label>
                <input type="email" name="" id="email"
                      onChange={(e) => setEmail(e.target.value)}
                   />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="" id="password" 
                    onChange={(e) => setPassword(e.target.value)} 
                    />
              </div>
              <button type="submit">Login</button>
              <p className="register-link">
                 Not register ? <Link to={'/register'}>Register here</Link>
              </p>
           </form>
       </div>
    </>
  )
}
