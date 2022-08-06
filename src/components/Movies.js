import React from "react";
import Card from 'react-bootstrap/Card';

class Movies extends React.Component {
    render() {
        console.log(this.props)
        return(
            this.props.movie.map(item => 
                <>
                <Card style={{ width: '30rem' }}  >
                  {/* <Card.Img variant="top" src={item.image_url} /> */}

                  <Card.Body>
                    <Card.Title>Movie name: {item.title}</Card.Title>
                     <Card.Text> 
                        {item.overview}
                    </Card.Text>
                  </Card.Body>

                </Card>

            {/* <p>{item.title}</p>
            <p>{item.released_on}</p>
            <p>{item.popularity}</p> */}
                </>
            )

        )
    }
}

export default Movies;

