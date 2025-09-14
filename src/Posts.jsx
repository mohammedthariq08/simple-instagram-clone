import React from 'react'
import { useState,useEffect } from 'react';

function Posts() {
    let [posts, setPosts]=useState([]);
    useEffect(()=>{
        fetch("https://database-8.onrender.com/posts")
        .then((data)=>data.json())
        .then((data)=>setPosts(data))
        .catch((err)=>console.log(err))
    },[]);
    console.log(posts)
  return (
    <div className="postContainer">
        {posts.length>0 ? 
        (<div>
            {posts.map((data)=>(
                <div key={data.id} className="feedPosts">
                    <div className="postProfilePic">
                        <img className="image" src={`https://database-8.onrender.com/posts${data.user.profile_pic}`} alt="profile picture"></img>
                        <h5>{data.user.username}</h5>
                    </div>
                    <img className="postPicture" src={`https://database-8.onrender.com/posts${data.image}`} alt="post picture"></img>
                    <div className="likeAndShare">
                        <i className="bi bi-suit-heart"></i><b>{data.Likes} Likes</b>
                        <i className="bi bi-chat"></i>
                        <i className="bi bi-send"></i>
                    </div>
                    <div className="caption">
                        {data.caption}
                    </div>
                </div>
            ))}
        </div>)
        :
        (<div>Loading Posts</div>)}
    </div>
  )
}

export default Posts