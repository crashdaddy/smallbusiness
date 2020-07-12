import React, { Component } from 'react';
import {
  TextField,
  Button,
  Container
} from '@material-ui/core'
import { v4 as uuidv4 } from 'uuid';


class AddListing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      hours: '',
      address: '',
      latitude: '',
      longitude: '',
      msgText: ''
    }
  }

  handleTextChange = (e) => {
    const state = { ...this.state }
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  addListing = (e) => {
    e.preventDefault()
    const newListing = { id: uuidv4(), name: this.state.name, description: this.state.description, address: this.state.address, hours: this.state.hours, latitude: this.state.latitude, longitude: this.state.longitude };
    this.props.addListing(newListing);
    this.setState({
      msgText: "record added!"
    })
  }

  render() {
    return (

      <div>
        <Container maxWidth="sm">
          <form className="login-form" onSubmit={this.addListing}>
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.name}
              name="name"
              label="name"
              type="text" />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.description}
              name="description"
              label="Description"
              type="text" />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.hours}
              name="hours"
              label="Hours"
              type="text" />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.address}
              name="address"
              label="Address"
              type="text" />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.latitude}
              name="latitude"
              label="Latitude"
              type="text" />
            <TextField
              required
              onChange={this.handleTextChange}
              value={this.state.longitude}
              name="longitude"
              label="Longitude"
              type="text" />
                
            <Button
              type="submit"
              className="login-button"
              variant="contained"
              color="primary">Add Dat Listing!</Button>
          </form>
        </Container>
        <div>
          {this.state.msgText}
        </div>
      </div>
    )
  }
}

export default AddListing