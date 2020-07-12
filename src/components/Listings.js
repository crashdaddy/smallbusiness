import React, { Component } from 'react';
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'

class Listings extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount = () => {
        var L = window.L;
        var mymap = L.map('mapid').setView([30.267, -97.743], 13);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoiY3Jhc2hkYWRkeTY2IiwiYSI6ImNrM3RlbnBwNDAyNDMza3BkaTlqcnhrOHIifQ.QMnrFfxc6tMVwvOeVNu7bw'
        }).addTo(mymap);
        this.props.listings.forEach(listing => {
            var marker = L.marker([listing.latitude, listing.longitude]).addTo(mymap);
            marker.bindPopup(`<strong>${listing.name}</strong><br/>${listing.description}<br/>Hours: ${listing.hours}`).openPopup();
        })
        
    }

    render() {

        return (
            <div style={{display:'flex',flexFlow:'row wrap',justifyContent:'space-around'}}>
                <div style={{width:'40%'}}>
                <Container maxWidth="lg" className="listing-container">
                    {this.props.user ?
                        <h4>Welcome, {this.props.user.username}</h4>
                        :
                        "Don't forget to login"
                    }
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Description</TableCell>
                                <TableCell>Hours</TableCell>
                                <TableCell>Address</TableCell>
                                <TableCell>Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.listings.map((listing, idx) => (
                                <TableRow key={listing.id}>
                                    <TableCell>{listing["name"]}</TableCell>
                                    <TableCell>{listing["description"]}</TableCell>
                                    <TableCell>{listing["hours"]}</TableCell>
                                    <TableCell>{listing["address"]}</TableCell>
                                    <TableCell>
                                        {this.props.user ?
                                            <DeleteIcon
                                                className="icon text-red" onClick={() => this.props.removeListing(idx)} />
                                            :
                                            ''
                                        }
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Container>
                </div>
                <div id="mapid"></div>
            </div>
        )
    }
}

export default Listings