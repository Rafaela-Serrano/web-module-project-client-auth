import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const Login = () => {

    const [credentials, setCredentials] = useState({username:"",password:""});

    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]:e.target.value
        })
    }

    const navigate = useNavigate()

    const handleSubmit = (e) => {

        e.preventDefault();

        axios.post("http://localhost:9000/api/login", credentials)
            .then(
                res => { 
                    localStorage.setItem("token", res.data.token);
                    navigate("/friendList")
                }
            )
            .catch(
                err => console.error(err)
            )    
    }

    return (

        <div>
            <h1>LOGIN</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>USERNAME</label>
                    <input
                        type="text"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>PASSWORD</label>
                    <input
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                    />
                </div>
            
                <button>SUBMIT</button>

            </form>
        </div>
    )
}

export default Login;