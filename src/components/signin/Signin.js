import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../App";
import "./signin.css";

const Signin = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  const [name, setName] = useState("");
  const [toggleSignin, setToggleSignin] = useState(false);
  const [signinPassword, setSigninPassword] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signinEmail, setSigninEmail] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    setToggleSignin(false);
  }, []);

  const postSigninData = () => {
    fetch("/signin", {
      method: "post",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        email: signinEmail,
        password: signinPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.error) {
        } else {
          localStorage.setItem("jwt", data.token);
          localStorage.setItem("user", JSON.stringify(data.user));
          dispatch({ type: "USER", payload: data.user });
          history.push("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const postSignupData = () => {
    fetch("/signup", {
      method: "post",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email: signupEmail,
        password: signupPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
        } else {
          history.push("/signin");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    setToggleSignin(false);
  };

  const uploadProfilePic = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "bakar-mern");
    data.append("cloud_name", "bakar");
    fetch("https://api.cloudinary.com/v1_1/bakar/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.secure_url);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const toggleForms = (event) => {
    toggleSignin ? setToggleSignin(false) : setToggleSignin("toggle-forms");
    // document.body.classList.toggle("toggle-forms");
  };
  const toggleClass = toggleSignin ? " toggle-forms" : "";
  return (
    <div className="signin-container">
      <div className={"flag signin" + toggleClass} onClick={toggleForms}>
        <h1>Signin</h1>
      </div>
      <div className={"flag signup" + toggleClass} onClick={toggleForms}>
        <h1>Signup</h1>
      </div>
      <div className={"signin-form" + toggleClass}>
        <div className="form">
          <div className="signin-email-input">
            <label htmlFor="email" id="">
              Email
            </label>
            <input
              onChange={(e) => setSigninEmail(e.target.value)}
              type="email"
              name="email"
              id="signinEmail"
              value={signinEmail}
              required
            />
          </div>
          <div className="signin-password-input">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setSigninPassword(e.target.value)}
              type="password"
              name="signinPassword"
              id="signinPassword"
              value={signinPassword}
              required
            />
          </div>
          <button onClick={() => postSigninData()}>Submit</button>
        </div>
      </div>
      <div className={"signup-form" + toggleClass}>
        <div className="form">
          <div className="signup-name-input">
            <label htmlFor="name" id="">
              Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="name"
              id="name"
              value={name}
              required
            />
          </div>
          <div className="signup-email-input">
            <label htmlFor="signupEmail" id="">
              Email
            </label>
            <input
              onChange={(e) => setSignupEmail(e.target.value)}
              type="email"
              name="signupEmail"
              id="signupEmail"
              value={signupEmail}
              required
            />
          </div>
          <div className="signup-password-input">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => setSignupPassword(e.target.value)}
              type="password"
              name="signupPassword"
              id="signupPassword"
              value={signupPassword}
              required
            />
          </div>
          <div className="profile-img-upload">
            <label htmlFor="select-image" className="upload-img-profile">
              <input
                type="file"
                name=""
                id="select-image"
                onChange={(e) => setImage(e.target.files[0])}
              />
              Select Profile Picture
            </label>
          </div>
          <button onClick={() => postSignupData()}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
