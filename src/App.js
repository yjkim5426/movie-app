import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

// Movie list component
class App extends Component {

  state = {
  }

  componentDidMount(){
    // setTimeout(function(){
    //   console.log('hello')
    // }, 2000)
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Matrix",
            poster: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/The_Matrix_Poster.jpg/220px-The_Matrix_Poster.jpg"
          },
          {
            title: "Full metal Jacket",
            poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCR7dxscYcXcZzqNRSz7KvdmdDJq3rVJKxOzxxLOLJmSg1uRZ_lQ"
          },
          {
            title: "Oldboy",
            poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
          },
          {
            title: "Star Wars",
            poster: "https://images-na.ssl-images-amazon.com/images/I/81mhcR03dIL._SY445_.jpg"
          },
          {
            title: "trainspotting",
            poster: "https://upload.wikimedia.org/wikipedia/en/thumb/7/71/Trainspotting_ver2.jpg/250px-Trainspotting_ver2.jpg"
          }
        ]
      })
    }, 5000)

  }

  // All component must have a render function
  // It shows what it is.
  render() {
    return (
      <div className="App">
        {/* {this.state.greeting} */}
        {/* Use title props to pass the data to Movie component*/}
        {/* <Movie title={movieTitles[0]} poster={movieImages[0]}/>
        <Movie title={movieTitles[1]} poster={movieImages[1]}/>
        <Movie title={movieTitles[2]} poster={movieImages[2]}/>
        <Movie title={movieTitles[3]} poster={movieImages[3]}/> */}

        {/* {this.state.movies.map(movie => {
          return <Movie title={movie.title} poster={movie.poster} />
        })} */}

        Loading

        {/* {[
          <Movie title={movies[0].title} poster={movies[0].poster} />
          <Movie title={movies[1].title} poster={movies[1].poster} />
          <Movie title={movies[2].title} poster={movies[2].poster} />
          <Movie title={movies[3].title} poster={movies[3].poster} />
        ]} */}
      </div>
    );
  }
}

export default App;



// js file --> react-creact-app --> html