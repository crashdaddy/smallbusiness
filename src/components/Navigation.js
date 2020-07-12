import React from 'react'
import {
    AppBar, Toolbar, IconButton,
    Typography
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'

const Navigation = (props) => {
    return (
        <AppBar position="relative">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    ATX Small Business
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/listings">Listings</Link>
                    </li>
                    {props.user ?
                        <li className="nav-list-item">
                            <Link to="/addListing">Add Listing</Link>
                        </li>
                        :
                        ''
                    }
                    {props.user ?
                        <li className="nav-list-item"
                            onClick={() => {
                                document.cookie = "loggedIn="
                                window.location.replace("/login")
                            }}>
                            Logout
                    </li>
                        :
                        <li className="nav-list-item">
                            <Link to="/login">Login</Link>
                        </li>
                    }
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation