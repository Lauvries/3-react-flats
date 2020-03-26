import React, { Component } from 'react';
import Map from './map';
import FlatList from './flat_list';
import flats from '../data/flats';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      flats,
      selectedFlat: [0]
    }

  }

  selectFlat = (index) => {
    this.setState({selectedFlat: flats[index]})
  }

  render() {
    return (
      <div>
        <FlatList flats={this.state.flats}
                  selectedFlat={this.state.selectedFlat}
                  selectFlat={this.selectFlat}/>
        <Map className="map-container" lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng}/>
      </div>
    );
  }
}

export default App;


