import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movies = [
  "Matrix",
  "Full Metal Jacket",
  "Oldboy",
  "Star Wars"
]


// Movie list component
class App extends Component {
  // All component must have a render function
  // It shows what it is.
  render() {
    return (
      <div className="App">
        {/* Use title props to pass the data to Movie component*/}
        <Movie title={movies[0]} />
        <Movie title={movies[1]} />
        <Movie title={movies[2]} />
        <Movie title={movies[3]} />
      </div>
    );
  }
}

export default App;



// js file --> react-creact-app --> html