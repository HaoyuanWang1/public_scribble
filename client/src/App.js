import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//Newly Added Comment
class App extends Component {
  constructor() {
        super()
        this.state = {
            value: ''
        }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

 }
 componentDidMount(){
  this.callApi().then(res=>this.setState({value:res.data})).catch(err=>console.log(err));
 }

 callApi= async()=>{
    let res = await fetch('/api/get');
    let res_data = await res.json(); 
    if(res.status !== 200 ) {console.log("data failed to fetch"); console.log(res_data)}
    console.log(res_data);
    return res_data;
 }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    fetch('/api/post', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: this.state.value,
      }),
    });
    event.preventDefault();
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
        <form onSubmit={this.handleSubmit}>
        <label>
          Stuff:
        </label>
        <textarea className="textbox" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default App;
