import React, { Component } from 'react';
import Flat from './flat'

class FlatList extends Component {

  render() {
    return (
      <div className="flat-list">
        {this.props.flats.map((flat, index) =>
          <Flat
          flat={flat}
          key={flat.lat}
          index={index}
          selectFlat={this.props.selectFlat}
          selected={flat.name === this.props.selectedFlat.name}
          /> )}
      </div>
    );
  }
}

export default FlatList;

