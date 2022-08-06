import React from "react";
// import Card from 'react-bootstrap/Card';
import Movie from "./Movie"

class Movies extends React.Component {
    render() {
        console.log(this.props)
        return(
            this.props.movie.map(item => 
                <Movie singlemovie={item} />
 
            )

        )
    }
}

export default Movies;

