import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Spot-marker'

class SpotMap extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 13
    };

    render() {
        const handleApiLoaded = (map, maps) => {
            // use map and maps objects
        }

        return (
            <div style={{ height: '600px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCxQfr-VaQqyOGCylf9PbMafybyjxJzVIU' }}
                    defaultCenter={this.props.location && this.props.location}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                >
                    <Marker
                        lat={this.props.location[0]}
                        lng={this.props.location[1]}
                        className="marker-spot"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default SpotMap;