import React, {useEffect} from 'react';
import './App.css';
import axios from "axios"; 
import { axiosWithAuth } from './utils/axiosWithAuth';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom"; 

import Login from "./components/Login"
import FriendList from './components/Friendlist';
import AddFriends from './components/AddFriend';
import PrivateRoute from './components/PrivateRoute';

function App() {

  const navigate = useNavigate();

    const logout = (e) => {
    
      e.preventDefault();
      
        console.log("something");

        const token = localStorage.getItem("token");
  
        axiosWithAuth()
        .post("http://localhost:9000/api/logout", token)
        .then( res => {
          localStorage.removeItem(token);
          navigate("/")
          console.log(res)
        })
        .catch( err => console.error(err))
    
    }

  return (
    
  <div className="App">
      
      <Link to="/">LOGIN</Link>
      <Link to="/friendList">FRIENDLIST</Link>
      <Link to="/addFriend">ADDFRIEND</Link>
      <Link onClick={logout}>LOGOUT</Link>
      
      <Routes>
        
        <Route path="/" element={<Login/>}/>
  
        <Route path='/' element={<PrivateRoute/>}> 
        <Route path="/friendList" element={<FriendList/>}></Route>
        </Route>

        <Route path='/' element={<PrivateRoute/>}> 
        <Route path="/addFriend" element={<AddFriends/>}></Route>
        </Route>

      
      </Routes>
  </div> 


  );
}

export default App;
