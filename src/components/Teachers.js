import React, { Component } from "react";
import Header from './Header'
import ImageText from './ImageText'
import { NavLink } from "react-router-dom";


class Teachers extends Component {

    render() {
        return(
            <React.Fragment>
            <Header />
            <ImageText />
            <div className="header-main-container">
            Meet our Teachers
           
         
                
            </div>
            </React.Fragment>
        )
    }
}

export default Teachers;