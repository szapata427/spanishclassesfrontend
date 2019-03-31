import React, { Component } from 'react';
import './App.css';
import ImageText from '../src/components/ImageText'
import Header from '../src/components/Header'
import Teachers from '../src/components/Teachers'
import HomePage from '../src/components/HomePage'
import AllTeachers from '../src/components/AllTeachers'
import { BrowserRouter, Switch,  Route } from 'react-router-dom';



class App extends Component {

  // componentDidMount() {
    
  //   fetch(`http://localhost:3005/teachers`)
  //   .then(resp => resp.json())
  //   .then(data => {
  //     console.log(data)
  //   })

  // }

  render() {
    return (
      <React.Fragment>

        
          <BrowserRouter>
          <Switch>
          <Route path="/teachers" component={Teachers}/>
          <Route path="/" component={HomePage}/>

          </Switch>
          </BrowserRouter>
          
            <p>
              You are in Medellin spanish lessons
            </p>
            
      </React.Fragment>

      
    );
  }
}

export default App;
