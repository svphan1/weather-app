import React, { Component } from 'react';
import './App.css';
import Title from './Components/Title';
import Form from './Components/Form';
import Weather from './Components/Weather';

const API_KEY = "31ce1c784689b64fa96286d0af80ae34";

class App extends Component {

  getWeather = async (e) => {
    e.preventDefault();
    const api_fetch = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`);
    const data = await api_fetch.json();
    console.log(data);
  };

  render() {
    return (
      <div>
        <Title />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;
