import React, { Component } from "react";
import Header from './Header'
import ImageText from './ImageText'
import { NavLink } from "react-router-dom";
import AllTeachers from "./AllTeachers"



class Teachers extends Component {

    

    render() {
        return(
            <React.Fragment>
                
            <Header />
            <div className="header-main-container">
            </div>
            <div>
               List of the teachers
            </div>
            <AllTeachers />
            </React.Fragment>
        )
    }
}

export default Teachers;