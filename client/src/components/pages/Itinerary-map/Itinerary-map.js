import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import './Itinerary-map.css'

import Marker from './Marker'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
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
            // Important! Always set the container height explicitly
            <div style={{ height: '600px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCxQfr-VaQqyOGCylf9PbMafybyjxJzVIU' }}
                    defaultCenter={this.props.location && this.props.location}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                >

                    {this.props.spots.map((elm, idx) =>
                        <Marker
                            key={idx}
                            lat={elm.location.coordinates[0]}
                            lng={elm.location.coordinates[1]}
                            text={elm.location.address}
                            description={elm.description}
                            img={elm.image}
                        />
                    )}
                    {/* <AnyReactComponent
                        lat={this.props.location[0]}
                        lng={this.props.location[1]}
                        text="My Marker"
                    /> */}
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;