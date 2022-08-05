import React from "react";
import Card from 'react-bootstrap/Card';

class Weather extends React.Component {
    render() {
        return(
            <>
            {/* {this.props.weatherInfrmation.map(item => 
                <li>{item.date} : {item.descriptioin}</li>
            )} */}



            <Card style={{ width: '30rem' }}  >
              {/* <Card.Img variant="top" src={this.props.mapSource} /> */}
              <Card.Body>
                <Card.Title>The Date📆 : The Weather ☀️🌧️ </Card.Title>
                 <Card.Text> 
                    {this.props.weatherInfrmation.map(item => 
                        <div>{item.date} : {item.descriptioin}</div>
                    )}
                </Card.Text>
              </Card.Body>
            </Card>
            </>
        )
    }
}

export default Weather;

//because we sending array of object
