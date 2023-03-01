import React, { useState } from 'react';
import { useNavigate } from 'react-router';

function Login() {

  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const passw=  /^[A-Za-z]\w{7,14}$/;

  const navigate = useNavigate();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [errorP, setErrorP] = useState('');
  const [btnError, setBtnError] = useState('');
  const [msg, setMsg] = useState('');


  const submit = () => {
    if(email==='admin@gmail.com' && password==='Admin123'){
      setMsg('login success');
      navigate("/Home");
    }else{
      setBtnError('Please enter Valid details')
    }
  } 

  const checkEmail = (e) => {
    setEmail(e.target.value);

    if(regex.test(email)===false) {
      setError('Please enter valid email address');
    }
    else{
      setError('');
      return true;
    }
  }
  

  const checkPassword = (e) => {
    setPassword(e.target.value);

    if(passw.test(password)===false) {
      setErrorP('Please enter valid Password');
    }if  (password < 6) {
      setErrorP('Password Must Be 6 Char');
      
    }
    else{
      setErrorP('');
      return true;
    }
  }


  return (
      <div className='flex justify-center items-center mt-40 ' >
        <div className='w-96 p-6 shadow-lg bg-white rounded-md'>
          <h1 className='text-3xl block text-center font-semibold' ><i class="fa-solid fa-user"></i>Login</h1>
          <hr className='mt-3'/>
          <div className='mt-3'>
            <label for="email" className='block text-base mb-2'>Email</label>
            <input type="text" id="email"  className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter Email..' onChange={checkEmail} />
            <p className='text-red-700'>{error}</p>
          </div>

          <div className='mt-3'>
            <label for="Password" className='block text-base mb-2'>Password</label>
            <input type="password" id="password"  className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Enter Password..' onChange={checkPassword} />
            <p className='text-red-700'>{errorP}</p>
          </div>
          <div className='mt-3 flex justify-between items-center'>
            <div>
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <div>
              <a href='https://Google.com' className='text-indigo-800 font-semibold'>Forget Password</a>
            </div>
          </div>
          <div className='mt-3'>
            <button type='submit' onClick={submit} className='border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold'>Login</button>
            <p className='text-red-700'>{btnError}</p>
          </div>

          <p>{msg}</p>
        </div>
      </div>
    
  )
}

export default Login
