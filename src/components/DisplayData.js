import React from "react";
import Card from 'react-bootstrap/Card';

class DisplayData extends React.Component {
    render() {
        return(
            <>
            <Card style={{ width: '30rem' }}  >
              <Card.Img variant="top" src={this.props.mapSource} />
              <Card.Body>
                <Card.Title>{this.props.cityInfo.display_name} </Card.Title>
                 <Card.Text>The Latitude: {this.props.cityInfo.latitude}</Card.Text>
                 <Card.Text>The Longitude: {this.props.cityInfo.longitude} </Card.Text>
              </Card.Body>
            </Card>

            </>
        )
    }
}

export default DisplayData;


