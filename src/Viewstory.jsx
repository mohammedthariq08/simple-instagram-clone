import React from 'react'
import {useParams,Link,useNavigate} from "react-router-dom";
import { useEffect,useState } from "react";
import "./App.css";

function Viewstory() {
    let {id,total}= useParams();
    let [story, setStory]=useState(null);
    useEffect(()=>{
        fetch(`https://database-8.onrender.com/stories/${id}`)
        .then((data)=> data.json())
        .then((data)=> setStory(data))
        .catch(err=>console.log(err)); 
    },[id]);

    const navigate=useNavigate();
    if(id>total || id<=0){
      navigate('/');
    }

  return (
    <div>
        {story ? 
        <div className="storySection">
          <Link to={`https://mohammedthariq08.github.io/simple-instagram-clone/#/story/${Number(id)-1}/${total}`}><i className="bi bi-arrow-left-square"></i></Link>
          <img src={`https://database-8.onrender.com/stories${story.image}`} alt="story image" className="storyImage"></img> 
          <Link to={`https://mohammedthariq08.github.io/simple-instagram-clone/#/story/${Number(id)+1}/${total}`}><i className="bi bi-arrow-right-square"></i></Link>
        </div> 
        : 
        <div>loading...</div>}
    </div>
  )
}

export default Viewstory