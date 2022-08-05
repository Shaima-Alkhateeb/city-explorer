// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component}  from 'react';
import SearchForm from './components/SearchForm';
import axios from 'axios';
import DisplayData from './components/DisplayData';
import ErrorComponent from './components/ErrorComponant';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display_name: '',
      latitude: '',
      longitude: '',
      map_src: '',
      //Dont display the data if we dont have a city name(flag)
      displayInfo: false,
      errorMsg: '',
      displayError: false
    }
  }

  //To update the state
  displayLocation = async(e) => {
    e.preventDefault();
    //To chek if I have the data
    // console.log(e.target.searchQuery.value)
    const searchQuery = e.target.searchQuery.value;
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_KEY}&q=${searchQuery}&format=json`;
    // console.log(url);



    try {
      //Put all the axios data inside variable(city: will hold all the city data)
      //axios.get(url[, config])
      const city = await axios.get(url)
      // console.log(city)

      //To update the state & display what I went
      this.setState ({
        display_name: city.data[0].display_name,
        latitude: city.data[0].lat,
        longitude: city.data[0].lon,
        displayInfo: true,
        displayError: false
      })

      // console.log(this.state)
      this.displayMap(city.data[0].lat, city.data[0].lon);

    } catch (error) {
      console.log(error)
      this.setState ({
        displayInfo: false,
        displayError: true,
        errorMsg: error.response.state + ' : ' + error.response.data.error
        
      })
    }
  }

  //To display the map
  displayMap = (lat, lon) => {
    const showMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_KEY}&center=${lat},${lon}&zoom=8`
    console.log(showMap)
    this.setState({
      map_src: showMap
    })

  }

  render () {
    return (
      <div className="App">
        <SearchForm submitHandler={this.displayLocation} />

        {this.state.displayInfo && 
          <DisplayData cityInfo={this.state} mapSource={this.state.map_src} />
        } 

        {this.state.displayError && 
          <ErrorComponent error={this.state.errorMsg} />
        }

      </div>

    );
  }
}

export default App;
