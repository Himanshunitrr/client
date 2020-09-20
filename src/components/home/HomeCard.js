import React, { Component } from 'react'
import Profile from "./Profile.jpg"
import "./home-card.css"
import {AiFillHeart} from "react-icons/ai"
export default class HomeCard extends Component {
  render() {
    return (
      <div className="home-card">
        <div className="posted-by"><h2>Himanshu</h2></div>
        <div className="media">
          <img src={Profile} alt="post"/>
        </div>
        <div className="reactions">
          <AiFillHeart/>
          <AiFillHeart/>
          <AiFillHeart/>
          <AiFillHeart/>
        </div>
        <div className="comments">
          <p>Garda uda diya</p>
          <p>Katai jahar</p>
          <input type="text" name="" placeholder="Add a comment" id=""/>
        </div>
      </div>
    )
  }
}
