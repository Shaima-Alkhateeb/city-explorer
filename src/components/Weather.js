import React from "react";
import Card from 'react-bootstrap/Card';
import WeatherDay from "./WeatherDay"

class Weather extends React.Component {
    render() {
        return(
            <>
            <Card style={{ width: '30rem' }}  >
              {/* <Card.Img variant="top" src={this.props.mapSource} /> */}
              <Card.Body>
                <Card.Title>The Date📆 : The Weather ☀️🌧️ </Card.Title>
                 <Card.Text> 
                    {this.props.weatherInfrmation.map(item => 
                        <WeatherDay singleDay={item} />
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
