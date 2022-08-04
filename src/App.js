// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Component}  from 'react';
import SearchForm from './components/SearchForm';
import axios from 'axios';
import DisplayData from './components/DisplayData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display_name: '',
      latitude: '',
      longitude: ''
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

    //Put all the axios data inside variable(city: will hold all the city data)
    //axios.get(url[, config])
    const city = await axios.get(url)
    // console.log(city)

    //To update the state & display what I went
    this.setState ({
      display_name: city.data[0].display_name,
      latitude: city.data[0].lat,
      longitude: city.data[0].lon

    })
    console.log(this.state)
    

  }

  render () {
    return (
      <div className="App">
        <SearchForm submitHandler={this.displayLocation} />
        <DisplayData cityInfo={this.state}/>
        
      </div>

    );
  }
}

export default App;
