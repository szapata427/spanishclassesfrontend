import React, { Component } from "react";
import S3FileUpload from 'react-s3';
import { uploadFile } from 'react-s3';


class UploadTeachers extends Component {



render() {
    return (

        <React.Fragment>
            <div id="teacher-signup">Please Sign Up</div>
            <div className="form-container">
            <div>
            <label className="name-title-form">Name </label>
            <input name="Name" class="teacher-nameform" />
            </div>
            <label className="age-title-form">Age </label>
            <input name="age" className="teacher-ageform" />
            </div>
        </React.Fragment>
    )
}
}

export default UploadTeachers;