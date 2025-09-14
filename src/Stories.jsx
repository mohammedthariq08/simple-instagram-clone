import React from 'react'
import "./App.css";
import { useEffect,useState } from "react";
import { useNavigate} from 'react-router-dom';
function Stories() {
  let navigate=useNavigate();
  let [Story, setStory]=useState([]);
  useEffect(()=>{
    fetch("https://database-7.onrender.com/stories")
    .then((data)=>data.json())
    .then((data)=>setStory(data))
    .catch(err=>console.log(err))
  },[]);
  let total=Story.length;
  return (
    <div>
      {Story.length >0 ?
        (<div className="storyPart">
          {Story.map((story)=>(
            <div key={story.id} onClick={()=>{navigate(`/story/${story.id}/${total}`)}}>
              <div className="gradient-border">
                <img className="storyImg" src={story.user.profile_pic}></img>
              </div>
              <p>{story.user.username}</p>
            </div>
          ))}
        </div>
      )
      :
      <p>loading...</p>}
    </div>
  );
}

export default Stories