import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import Map from './map'

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

export default GoogleApiComponent({
    apiKey: AIzaSyDeY7WMg8UU0JppzUqU-IWNo99uZM-nOsw
})(Container)