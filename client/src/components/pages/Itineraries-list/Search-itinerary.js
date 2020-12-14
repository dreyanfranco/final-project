import React, { Component } from 'react'
import { Form, FormControl } from 'react-bootstrap';
class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            results: ''
        }
    }

    // handleInputChange = e => {
    //     const { results } = e.target
    //     this.setState({ [results]: value }, () => this.props.filterProduct(this.state.results))
    // }

    handleInputChange = e => {
        const { value } = e.target
        this.setState({ results: value })
        this.props.filter(value)
    }

    render() {
        return (
            <Form>
                <FormControl name="name" type="text" placeholder="Buscar por ciudad..." className="mr-sm-2" value={this.state.results} onChange={this.handleInputChange} />
            </Form>
        )
    }
}

export default SearchBar