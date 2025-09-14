import React from 'react'
import { useEffect,useState } from 'react';
import "./App.css";
import axios from 'axios';

function Suggesions() {
    let [profile, setProfile]=useState(null);
    let [suggesions, setSuggesion]=useState([]);
    useEffect(()=>{
      fetch("https://database-8.onrender.com/profile")
      .then(data=>data.json())
      .then(data=>setProfile(data))
      .catch(err=>console.log(err))

      fetch("https://database-8.onrender.com/sugessions")
      .then(data=>data.json())
      .then(data=>setSuggesion(data))
      .catch(err=>console.log(err))
    },[]);
    let handleFollow=(id,username)=>{
      axios.post('https://database-8.onrender.com/followers', {"id":id,"username":username})
      .then(()=>alert("followed"))
      .catch(err=>{console.log(err)})
    }
  return (
    <div>
      <div className="profile">
        {profile ? 
        <div className="postProfilePic">
          <img className="image" src={profile.profile_pic} alt=" profile picture"></img>
          <h5>{profile.username}</h5>
          <small>Switch</small>
        </div>
        :
        <p>Loading...</p>  
        }
      </div>
      <div className="sugginter">
        <p>Suggested For You</p>
        <b>See All</b>
      </div>
      <div>
        {suggesions.length >0 ?
          (<div className="suggested">
            {suggesions.map((data)=>(
              <div key={data.id} className="postProfilePic">
                <img className="image" src={data.profile_pic} alt="Profile Picture"></img>
                <h5>{data.username}</h5>
                <button className="followButton" onClick={()=>handleFollow(data.id,data.username)}>Follow</button>
              </div>)
            )}
          </div>)
          :
          <p>loading..</p>
        }
      </div>
    </div>
  )
}
export default Suggesions