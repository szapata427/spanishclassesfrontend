import React, { Component } from "react";
import S3FileUpload from 'react-s3';
import { uploadFile } from 'react-s3';


class UploadTeachers extends Component {



render() {
    return (

        <React.Fragment>
            <span>Please Sign Up:</span>
            <div>
            <span className="name-title-form">Name </span>
            <input name="Name" class="teacher-nameform" />
            </div>
        </React.Fragment>
    )
}
}

export default UploadTeachers;