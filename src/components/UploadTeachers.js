import React, { Component } from "react";
import S3FileUpload from "react-s3";
import { uploadFile } from "react-s3";

class UploadTeachers extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="teacher-signup">
          Please Sign Up
          <div className="form-container">
            <div className="form-name-container">
              <label className="name-title-form">Name </label>
              <input name="Name" class="teacher-nameform-input" />
            </div>
            <div className="form-name-container">
            <label className="name-title-form">Age </label>
            <input name="age" className="teacher-nameform-input" />
            </div>
            <div className="form-name-container">
            <label className="name-title-form">Description </label>
            <input name="description" className="teacher-descriptionform-input" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default UploadTeachers;
