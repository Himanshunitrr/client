import React, { Component } from "react";
import ProfileImage from "./Profile.jpg";
import "./profile.css";
export default class Profile extends Component {
  render() {
    return (
      <div>
        <div className="information">
          <div className="profile-img-container">
            <img
              src={ProfileImage}
              alt="profile-image"
              className="profile-img"
            />
          </div>
          <div className="profile-name">
            <h1>Himanshu Maurya</h1>
          </div>
          <div className="profile-bakar-info">
            <div className="followers">
              <p>1M followers</p>
            </div>
            <div className="following">
              <p>0 following</p>
            </div>
            <div className="number-of-posts">
              <p>108 posts</p>
            </div>
          </div>
          <div className="flag-line"></div>
        </div>
        <div className="posts"></div>
      </div>
    );
  }
}
