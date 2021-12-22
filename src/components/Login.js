import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios';

const Login = ()=> {
    const { push } = useHistory();
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        setCredentials ({
            ...credentials,
            [e.target.name]:e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("creds", credentials);
        axios.post('http://localhost:9000/api/login', credentials)
        .then(resp => {
            localStorage.setItem("token", resp.data.payload);
            push('/friends');
        })
        .catch(err=> {
            console.log(err)
        });

    }

    return(
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input onChange={handleChange} name="username" id="username"/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input onChange={handleChange} name="password" type="password" id="password"/>
        </div>
        <button>Submit</button>
      </form>
    
    </div>)
  }

  export default Login;