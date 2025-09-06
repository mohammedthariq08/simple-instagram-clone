import React from 'react'
import "./App.css";
import Sidebar from "./Sidebar.jsx";
import Feed from "./Feed.jsx";
import Suggesions from './suggesion.jsx';


function App() {
  return (
    <div className="container">
      <div className="sidebar"><Sidebar/></div>
      <div className="feed"><Feed/></div>
      <div className="suggesions"><Suggesions/></div>
    </div>
  )
}

export default App