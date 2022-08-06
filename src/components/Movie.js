import React from "react";
import Card from 'react-bootstrap/Card';


class Movie extends React.Component {
    render() {
        return(
            <>
                <Card style={{ width: '30rem' }}  >
                  {/* <Card.Img variant="top" src={item.image_url} /> */}

                  <Card.Body>
                    <Card.Title>Movie name: {this.props.singlemovie.title}</Card.Title>
                     <Card.Text> 
                        {this.props.singlemovie.overview}
                    </Card.Text>
                  </Card.Body>

                </Card>
            
            </>
        )
    }
}

export default Movie;