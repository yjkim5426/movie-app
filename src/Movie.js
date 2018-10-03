import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component{
    render() {
        // console.log(this.props)
        return (
            <div>
                <MoviePoster />
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src="https://m.media-amazon.com/images/M/MV5BMTM0NjQ4OTgyNV5BMl5BanBnXkFtZTcwOTU2MzQ4Nw@@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg"></img>
        )
    }
}

export default Movie;