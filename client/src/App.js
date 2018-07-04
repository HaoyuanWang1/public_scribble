import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
        super()
        this.state = {
            response: ''
        }
 }
 componentDidMount(){
  this.callApi().then(res=>this.setState({response:res.data})).catch(err=>console.log(err));
 }

 callApi= async()=>{
    let res = await fetch('/api/get');
    let res_data = await res.json(); 
    if(res.status !== 200 ) {console.log("data failed to fetch"); console.log(res_data)}
    console.log(res_data);
    return res_data;
 }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-header">{this.state.response}</p>
      </div>
    );
  }
}

export default App;
