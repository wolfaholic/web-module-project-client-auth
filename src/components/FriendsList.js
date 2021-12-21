import React, { useState, useEffect } from 'react';
import axios from 'axios';


const FriendsList = ()=> {
    const [ friends, setFriends ] = useState([]);

    useEffect(() => {
        const cred = localStorage.getItem('creds');

    axios.get('http://localhost:3000/api/friends', {
        headers: {
            authorization: cred
        }
        })
        .then(resp=> {
            setFriends(resp.data);
        })
        .catch(err=> {
            console.log(err);
        });
    }, []);
        

    return(
    <div>
        <h2>FriendsList</h2>
        <ul>
            {
                friends.map(friend=> {
                    return <li>{friend.data.name}{friend.data.age}{friend.data.email}</li>
                })
            }
        </ul>
    </div>
    )
  }



  export default FriendsList;