import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios"; 

function AddFriends () {
    const [newFriend, setnewFriend] = useState({name:"",email:""})

    const handleChange = (e) => {
        setnewFriend({
            ...newFriend,
            [e.target.name]:e.target.value
        })
    }

    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();

        axiosWithAuth()
        .post("http://localhost:9000/api/friends", newFriend)
        .then( res => navigate("/friendList"))
        .catch( err => console.error(err))
    }
    return(
    <div>
        <h1>ADD FRIEND</h1>
        
        <form onSubmit={handleSubmit}>

            <div>
                <label>FRIEND NAME</label>
                <input 
                    type="text"
                    name="name"
                    value={newFriend.name}
                    onChange={handleChange}
                />
            </div>

            <div>
                <label>FRIEND EMAIL</label>
                <input
                    type="email"
                    name="email"
                    value={newFriend.email}
                    onChange={handleChange}
                />
            </div>

            <button>SUBMIT</button>
        </form>
    </div>
        

    )
}

export default AddFriends;