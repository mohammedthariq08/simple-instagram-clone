import React from 'react';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';


function profile() {
  let [profile , setProfile]=useState(null);
  let [followers, setFollowers]=useState([]);
  let [unfollow, setUnfollow]=useState(0);
  useEffect(()=>{
    axios.get("https://database-7.onrender.com/profile")
    .then((data)=>{setProfile(data.data); console.log(data)})
    .catch(err=>{console.log(err)})

    axios.get('https://database-7.onrender.com/followers')
    .then((data)=>{setFollowers(data.data)})
    .catch(err=>{console.log(err)})
  },[unfollow])
  function handleOnChange(e){
    setProfile((previous)=>({
      ...previous,
      [e.target.name]:e.target.value
    }))
  }
  const handleUpdate= async ()=>{
    axios.put('https://database-7.onrender.com/profile',profile)
    .then(console.log("updated"))
    .catch(err=>{console.log(err)})
  }
  const handleFollow=async(id)=>{
    axios.delete(`https://database-7.onrender.com/followers/${id}`)
    .then(()=>alert("unfollowed"))
    .then(()=>setUnfollow(!unfollow))
    .catch(err=>{console.log(err)})
  }
  return (
    <div className="profile1">
      {profile?
      (
        <>
        <div className="profilediv">
          <img src={profile.profile_pic} className="profileimg1"></img>
          <h4 className="profilename">{profile.username}</h4>
        </div>
        <input className="profileName" type="text" value={profile.username} name="username" onChange={handleOnChange}/>
        <input className="profilePicture" type="text" value={profile.profile_pic} name="profile_pic" onChange={handleOnChange}></input> 
        <button className="profileButton" type="submit" onClick={handleUpdate}>Update</button>
        </>
      )
      :(
        <div>Loading...</div>
      )}

      <div className="followersList">
        Followers 
        {followers.length>0 ? 
          (followers.map(follower=>(
            <div key={follower.id} className="follower">
              {follower.username}
              <button className="unfollowBtn" onClick={()=>{handleFollow(follower.id)}}>UnFollow</button>
            </div>
          )))
          :(<div>Loading...</div>)}
      </div>
    </div>
  )
}

export default profile