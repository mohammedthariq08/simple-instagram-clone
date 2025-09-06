import React from 'react'
import Posts from './Posts.jsx';
import Stories from "./Stories.jsx";
import "./App.css";

function Feed() {
  return (
    <div>
        <div className="stories"><Stories/></div>
        <div><Posts/></div>
    </div>
  )
}

export default Feed