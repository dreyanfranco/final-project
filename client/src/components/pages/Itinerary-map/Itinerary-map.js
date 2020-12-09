import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

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
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '400px', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCxQfr-VaQqyOGCylf9PbMafybyjxJzVIU' }}
                    defaultCenter={this.props.location && this.props.location}
                    defaultZoom={this.props.zoom}
                >
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