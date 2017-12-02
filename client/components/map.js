import React, { Component, PropTypes } from 'react';
import ReactDOM, { render } from 'react-dom';

class Map extends Component {
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
            this.loadMap();
        }
        if (prevProps.lat !== this.props.lat || prevProps.lng !== this.props.lng) {
            this.loadMap();
        }
    }
    componentDidMount() {
        this.loadMap();
    }

    loadMap() {
        // console.log(this.props);
        let results1 = [];
        let that = this;
        if (this.props && this.props.google) {
            // console.log(this.props);
            const {google} = this.props;
            const maps = google.maps;
            const mapRef = this.refs.map;
            const node = ReactDOM.findDOMNode(mapRef);
            let zoom = this.props.zoom;
            // let lat = 33.9794474;
            let lat = this.props.lat;
            let lng = this.props.lng;
            const center = new maps.LatLng(lat, lng);
            let request = {
                location: center,
                radius: '1000',
                type: ['restaurant']
            };
            const mapConfig = Object.assign({}, {
                center: center,
                zoom: zoom
          });
          this.map = new maps.Map(node, mapConfig);
          let service = new maps.places.PlacesService(this.map);
          service.nearbySearch(request, function(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                console.log(results);
                for (var i = 0; i < results.length; i++) {
                  results1[i] = results[i];
                //   createMarker(results[i]);
                }
                that.props.updateLocations(results1);
                console.log(results1);             
              }
          });   
        }
        // console.log(results1);
        // this.props.updateLocations(results1);
      }

    render() {        
        const style = {
            width: '100vw',
            height: '100vh'
        }
        return (
          <div ref='map' style = {style}>
            Loading map...123
          </div>
        )
    }
}

// Map.propTypes = {
//     google: React.PropTypes.object,
//     zoom: React.PropTypes.number,
//     initialCenter: React.PropTypes.object,
// }

// Map.defaultProps = {
//     zoom: 10,
//     initialCenter: {
//       lat: 33.9794474,
//       lng: -118.4224755
//     },
// }


export default Map;