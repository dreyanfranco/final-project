import React, { Component } from 'react'
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
} from 'react-places-autocomplete';


export default class GmapsPlaces extends Component {
    constructor(props) {
        super(props);
        this.state = { address: '', coordinates: '', type: 'Point' };
    }

    handleChange = address => {
        this.setState({ address });

    };

    handleSelect = address => {
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => this.setState({ ...this.state, coordinates: [latLng.lat, latLng.lng], address: address }))
            .then((e) => {
                this.props.getData(this.state)
            })
            .catch(error => console.error('Error', error));
    };

    
    render() {

        return (

            <PlacesAutocomplete
                value={this.state.address}
                onChange={this.handleChange}
                onSelect={this.handleSelect}
                // searchOptions={this.searchOptions}
            >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div className="input-wrapper">
                        <input
                            {...getInputProps({
                                placeholder: 'Localización...',
                                className: 'location-search-input places-input',
                            })}
                        />
                        <div className="autocomplete-dropdown-container places-result">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                    ? 'suggestion-item--active place-suggestion'
                                    : 'suggestion-item place-suggestion';
                                return (
                                    <div
                                        {...getSuggestionItemProps(suggestion, {
                                            className,

                                        })}
                                    >
                                        <span>{suggestion.description}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>

        );
    }
}