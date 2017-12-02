import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Map from './map'
import {GoogleApiWrapper} from 'google-maps-react';

class Container extends Component {
    render() {
        const style = {
            width: '100vw',
            height: '100vh'
        }
        return (
        <div style={style}>
            <Map google={this.props.google} />
        </div>
    )}
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCWFt4hAIFUHT5X3r-Ww4EwjhGl41F8BNY'
})(Container)