import React, { Component, PropTypes } from 'react';
import ReactDOM, { render } from 'react-dom';

class Query extends Component {
    handleLocation = (e) => {
        e.preventDefault();
        const lat = this.refs.lat.value;
        const lng = this.refs.lng.value;
        this.props.updateCoordinates(lat, lng);
    }

    render(){
        // console.log(this.props.loc.length);
        // if (this.props.loc.length > 0) {
        //     console.log(this.props.loc[0].name);
        //   }
        return(
            <div>
                <form id="search" onSubmit={this.handleLocation}>
                    <input type="text" placeholder="latitude" ref="lat" />
                    <input type="text" placeholder="longitude" ref="lng" />
                    <input type="submit" className="hidden" />
                </form>
                <ul ref="results">
                    {/* {console.log(this.props.locations.map(function(item, i){
                        return i}))
                    } */}
                    {/* {console.log(this.props.loc)} */}
                    {this.props.loc.length !== 0 && this.props.loc.map((item,i) => { 
                        return (
                        <div key={i} id={i}>
                            <li style={{listStyleType: 'none'}}>{item.name} - {item.rating}</li> <button type="button" onClick={() => this.props.save(i)}>Save</button>
                        </div>
                    )
                    })}
                </ul>
            </div>
        )
    }
}

export default Query;