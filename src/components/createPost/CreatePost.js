import React, { Component } from "react";
import "./createPost.css";
import { GoCloudUpload} from "react-icons/go"

export default class CreatePost extends Component {
  render() {
    return (
      <div className="create-post">
        <form action="">
          <div className="title-wrapper">
            <label htmlFor="crete-post-title">Title</label>
            <input type="text" name="" id="create-post-title" />
          </div>
          <div className="message-wrapper">
            <label htmlFor="">Messaage</label>
            <input type="text" name="" id="create-post-message" />
          </div>
          <div className="upload-submit-wrapper">
            <label htmlFor="select-image" className="image-upload">
              <GoCloudUpload  className="upload-icon"/>
              <input type="file" name="" id="select-image" />Select Image
            </label>
            <button>Submit Post</button>
          </div>
        </form>
      </div>
    );
  }
}
