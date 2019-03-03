import React, { Component } from "react";
import Header from './Header'
import ImageText from './ImageText'
import { NavLink } from "react-router-dom";


class HomePage extends Component {
    render() {
        return (
    <React.Fragment>
        <Header />
        <ImageText />                
        <div>

        you are in the home page
        </div>
    </React.Fragment>
        )
    }
}

export default HomePage;