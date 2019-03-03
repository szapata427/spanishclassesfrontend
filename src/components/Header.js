import React, { Component } from "react";
import { NavLink } from "react-router-dom";


class Header extends Component {

    render() {
        return(
            <div className="header-main-container">
            <NavLink to="/" className="nav_link">Home</NavLink>
            <NavLink to="/teachers" className="nav_link">Teachers</NavLink>
                <div class="dropdown">
                    <button class="dropbtn">Classes 
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                 </div> 
            
                
            </div>
        )
    }
}

export default Header;