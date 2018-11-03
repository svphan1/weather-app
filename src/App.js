import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Form from './Components/Form';
import Weather from './Components/Weather';

const API_KEY = "31ce1c784689b64fa96286d0af80ae34";

class App extends Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.city.value;
    const country = e.target.country.value;
    const api_fetch = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_fetch.json();
    console.log(data);
  };

  render() {
    return (
      <div>
        <Header />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;
