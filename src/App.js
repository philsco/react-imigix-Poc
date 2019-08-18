import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Container} from 'react-bootstrap';
import Sizes from './settings.sizes.json';
import Assets from './settings.urls.json';
import Gallery from './gallery';
import MainNav from './nav';
import Export from './export';
import Settings from './settings';
import Asset from './asset';
import FocalTest from './focalTest';


class App extends Component {
  constructor(props) {
    super(props);
     this.state = { 
       images: [],
       settings: {}
     }
    }

  componentDidMount () {
    let cleanUrls = Assets.map(item => {
      let url = new URL(item);
      return url.origin+url.pathname
    })
    this.setState({images: cleanUrls});
    this.setState({settings: Sizes})
  }

  render() {

    console.dir(this.state)
    
    return (
      <div className="App">
        <MainNav />
        <Container>
        <Router>
        <Route exact path='/' render={props => <Gallery {...props} propdata={this.state} />} />        
        <Route path='/settings' render={props => <Settings {...props} propdata={this.state} />} />
        <Route path='/export' render={props => <Export {...props} propdata={this.state} />} />
        <Route path='/asset/:id' render={props => <Asset {...props} propdata={this.state} />} />
        <Route path='/focal' render={props => <FocalTest {...props} propdata={this.state} />} />
        </Router>
        </Container>
      </div>
    );
  }
}

export default App;
