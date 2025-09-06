import React from 'react'
import "./App.css";
import {useNavigate} from 'react-router-dom';

function Sidebar() {
  let navigate = useNavigate();
  return (
    <>
      <div className="sidebarContents">
        <div>
          <img className="instagram_text" src="src\assets\Instagram_text1.png"></img>
        </div>
        <div className="sidebar_icons">
          <div><i className="bi bi-house-door-fill"></i>Home</div>
          <div><i className="bi bi-search"></i>Search</div>
          <div><i className="bi bi-compass"></i>Explore</div>
          <div><i className="bi bi-camera-reels"></i>Reels</div>
          <div><i className="bi bi-messenger"></i>Messages</div>
          <div><i className="bi bi-heart"></i>Notification</div>
          <div><i className="bi bi-plus-square"></i>Create</div>
          <div onClick={()=>{navigate('/profile')}}><i className="bi bi-person-circle"></i>Profile</div>
        </div>
      </div>
      <div>
        <div className="more_icon"><i className="bi bi-list"></i><span className="more">More</span></div>
      </div>
    </>
  )
}

export default Sidebar