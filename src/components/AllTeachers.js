import React, { Component } from "react";
import UploadTeachers from './UploadTeachers'

class AllTeachers extends Component {

    state = {
        teacher: ""
    }

    fetchallteachers = () => {
        fetch(`http://localhost:3005/teachers`)
        .then(resp => resp.json())
        .then(data => {
         data.map(teacher => {
             console.log(teacher)
         })
        })
    }
    render() {

        return (
            <React.Fragment>        
            {this.fetchallteachers}
            <UploadTeachers />
            </React.Fragment>        
        )
        
    }
}

export default AllTeachers;