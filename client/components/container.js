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
        // console.log(array);
        this.setState({locations: array});
    }

    updateCoordinates = (lat, lng) => {
        this.setState({lat: lat, lng: lng});
    }

    fetchRequest = () => {
        fetch('/show').then(function(response){
            return response.json();
        }).then(data => {
            console.log(data);
            this.setState({saved: data});
        });
    }

    componentWillMount() {
        this.fetchRequest();
        setInterval(this.fetchRequest, 3000);
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
            height: '100vh'
        }
        return (
        <div style={style}>
            <Query updateCoordinates={this.updateCoordinates} loc={this.state.locations} lat={this.state.lat} lng={this.state.lng} />
            <Map google={this.props.google} updateLocations={this.updateLocations} zoom={15} lat={this.state.lat} lng={this.state.lng} />
            <List saved={this.state.saved}/>
        </div>
    )}
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCWFt4hAIFUHT5X3r-Ww4EwjhGl41F8BNY'
})(Container)