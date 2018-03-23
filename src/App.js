import React, { Component } from 'react';

// laoding external components
import Header from './header';
import Issues from './issues';

//loading image assets
import logo from './logo.svg';

//loading stylesheets

import 'font-awesome/css/font-awesome.css';
import 'bulma/css/bulma.css';
import './App.css';

class App extends Component {
  render() {
    return (

      <div className="App"> 
        <Header />       
        <Issues/>
      </div>
    );
  }
}

export default App;
