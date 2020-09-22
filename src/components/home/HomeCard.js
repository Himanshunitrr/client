import React from "react";
import Profile from "./Profile.jpg";
import "./home-card.css";
import { AiFillHeart } from "react-icons/ai";

const HomeCard = (props) => {
  // console.log(props.post)
  return (
    <div className="home-card">
      <div className="posted-by">
        <h2>{props.post.postedBy.name}</h2>
      </div>
      <div className="media">
        <img src={props.post.photo} alt="post" />
      </div>
      <div className="reactions">
        <AiFillHeart onClick={() => props.likePost(props.post._id)} />
        <p>{props.post.likes.length}</p>
        <AiFillHeart />
        <AiFillHeart />
        <AiFillHeart />
      </div>
      <div className="comments">
        <p>Garda uda diya</p>
        <p>Katai jahar</p>
        <label htmlFor="comment"></label>
        <input type="text" name="" placeholder="Add a comment" id="comment" />
      </div>
    </div>
  );
};

export default HomeCard;
