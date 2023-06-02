import React, {useState, useEffect} from "react" ;
import axios from "axios"
import { axiosWithAuth } from "../utils/axiosWithAuth";


function FriendList () {

    const [friends, setfriends] = useState([]);

    useEffect( () => {

        const getfriends = () => {
        
        axiosWithAuth()
        .get("http://localhost:9000/api/friends")
        .then (
            res => {
            console.log(res);
            setfriends(res.data) ; 
            
            }
        )
        .catch ( 
            err => console.error(err)
        )

        }

        getfriends(); 
    }, []);

    console.log(friends)

    return (
        <div>
            <h1>FRIENDS LIST</h1>
            {
                friends.map( 
                    (friend, index)  => <ul> <li key={index.id} > {friend.name} - {friend.email} </li> </ul>
                    )
            }
        </div>
    )
}

export default FriendList