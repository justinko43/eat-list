import React, { Component, PropTypes } from 'react';
import ReactDOM, { render } from 'react-dom';

class Query extends Component {
    handle = (e) => {
        e.preventDefault();
        // console.log(React.findDOMNode(this.refs.lat).value)
        // console.log(this.refs.lng.value);
        const lat = this.refs.lat.value;
        const lng = this.refs.lng.value;
        // console.log(this.props);
        // let location = {
        //     lat: React.findDOMNode(latRef).value.trim(),
        //     lon: React.findDOMNode(lonRef).value.trim(),
        // };
        this.props.updateCoordinates(lat, lng);
    }

    componentDidUpdate() {
        // console.log(JSON.stringify(this.props.loc));
        // this.render();


        // console.log(JSON.stringify(this.props.loc));
        
    }

    render(){
        // console.log(this.props.loc.length);
        // if (this.props.loc.length > 0) {
        //     console.log(this.props.loc[0].name);
        //   }
        return(
            <div>
                <form id="search" onSubmit={this.handle}>
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
                            <li style={{listStyleType: 'none'}}>{item.name} - {item.rating}</li> <button type="button">Save?</button>
                        </div>
                    )
                    })}
                </ul>
            </div>
        )
    }
}

export default Query;