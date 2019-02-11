import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchCom from './SearchCom'

class App extends Component {
  render() {
    return (
      <div className="wraper">
        <div id="head">
          <div id="lg">
            <img hidefocus="true" alt='' class="index-logo-srcnew" src="//www.baidu.com/img/bd_logo1.png?qua=high" width="270" height="129" usemap="#mp"/>
          
          </div>
          <SearchCom />
        </div>
      </div>
    );
  }
}

export default App;
