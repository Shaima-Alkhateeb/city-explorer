import React from "react";
import Card from 'react-bootstrap/Card';

class DisplayData extends React.Component {
    render() {
        return(
            <>
            <Card style={{ width: '18rem' }}  >
              {/* <Card.Img variant="top" src={this.props.image_url} alt={this.props.title} onClick={this.favouriteClick} /> */}
              <Card.Body>
                <Card.Title>{this.props.cityInfo.display_name} </Card.Title>
                 {/* <div>❤ Like it : {this.state.favourite} </div> */}
                <Card.Text>The Latitude: {this.props.cityInfo.latitude}</Card.Text>
                <Card.Text>The Longitude: {this.props.cityInfo.longitude} </Card.Text>
              </Card.Body>
            </Card>

            </>
        )
    }
}

export default DisplayData;


