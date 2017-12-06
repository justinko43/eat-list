import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Map from './map';
import Query from './query';
import List from './list'
import {GoogleApiWrapper} from 'google-maps-react';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: [],
            lat: 33.9794474,
            lng: -118.4224755,
            saved: [],
        }
        this.updateLocations = this.updateLocations.bind(this);
        this.updateCoordinates = this.updateCoordinates.bind(this);
        
    };

    updateLocations = (array) => {
        this.setState({locations: array});
    }

    updateCoordinates = (lat, lng) => {
        this.setState({lat: lat, lng: lng});
    }

    saveRequest = (index) => {
        let that = this; 
        fetch('/show', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                placesId: that.state.locations[index].placesId,
                name: that.state.locations[index].name,
                rating: that.state.locations[index].rating,
                types: that.state.locations[index].types,
                address: that.state.locations[index].address,
            }),
        });
    }

    fetchRequest = () => {
        fetch('/show').then(function(response){
            return response.json();
        }).then(data => {
            this.setState({saved: data});
        });
    }

    deleteRequest = (index) => {
        let that = this; 
        fetch('/delete', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                placesId: that.state.saved[index].placesId,
                name: that.state.saved[index].name,
                rating: that.state.saved[index].rating,
                types: that.state.saved[index].types,
                address: that.state.saved[index].address,
            }),
        });
    }

    componentWillMount() {
        this.fetchRequest();
        setInterval(this.fetchRequest, 500);
    }

    render() {
        // console.log(this.state)
        const array = [];
        array.concat(this.state.locations);
        // console.log(array);
        // console.log(this.state.locations.map((item,i) =>{ return 'Test'}));
        const style = {
            display: 'flex',
            flexDirection: 'row',
            width: '100vw',
            height: '100vh',
            font: 'systems-ui',
        }
        return (
        <div style={style}>
            <Query save={this.saveRequest} updateCoordinates={this.updateCoordinates} loc={this.state.locations} lat={this.state.lat} lng={this.state.lng} />
            <Map google={this.props.google} updateLocations={this.updateLocations} zoom={15} lat={this.state.lat} lng={this.state.lng} />
            <List saved={this.state.saved} deleteRequest={this.deleteRequest}/>
        </div>
    )}
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCWFt4hAIFUHT5X3r-Ww4EwjhGl41F8BNY'
})(Container)