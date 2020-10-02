import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";
import { useParams } from "react-router-dom";
import "./userProfile.css";
import ProfileImage from "../profile/Profile.jpg";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const { state, dispatch } = useContext(UserContext);
  const { userid } = useParams();
  // console.log(userid)
  useEffect(() => {
    fetch(`/user/${userid}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);

        setUserProfile(result);
      });
  }, [userProfile]);

  const followUser = () => {
    // console.log(state)
    if (userid !== state._id) {
      fetch("/follow", {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          followId: userid,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setUserProfile({
            ...userProfile,
            followers: result.followers,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    
  };
  const unfollowUser = () => {
    if (userid !== state._id) {
      fetch("/unfollow", {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({
          followId: userid,
        }),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setUserProfile({
            ...userProfile,
            followers: result.followers,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
    
  };

  return (
    <div>
      <div className="information">
        <div className="profile-img-container">
          <img src={userProfile ? userProfile.user.pic : ""} alt="profile-image" className="profile-img" />
        </div>
        <div className="profile-name">
          <h1>{userProfile ? userProfile.user.name : ""}</h1>
        </div>
        <div className="profile-bakar-info">
          <div className="followers">
            <p>
              {userProfile ? userProfile.user.followers.length : ""} followers
            </p>
          </div>
          <div className="following">
            <p>
              {userProfile ? userProfile.user.following.length : ""} following
            </p>
          </div>
          <div className="number-of-posts">
            <p>{userProfile ? userProfile.posts.length : ""} posts</p>
          </div>
          <div className="follow-button">
            {state && userid == state._id ? "" : userProfile && userProfile.user.followers.includes(state._id) ? (
              <button onClick={() => unfollowUser()}>Unfollow</button>
            ) : (
              <button onClick={() => followUser()}>Follow</button>
            )}
          </div>
        </div>
        <div className="flag-line"></div>
      </div>
      <div className="posts">
        {userProfile
          ? userProfile.posts.map((item) => {
              return (
                <img
                  src={item.photo}
                  alt="profile-image"
                  className="post"
                  key={item._id}
                />
              );
            })
          : ""}
      </div>
    </div>
  );
};
export default UserProfile;
