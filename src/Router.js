import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Main from './components/Main';
import Listings from './containers/Listings'
import AddListing from './containers/AddListing'
// import Car from './components/Car'
import Login from './containers/Login'

// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"
const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}
// Write ProtectedRoute function here
const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={(props) => checkAuth()
            ? <Component {...props} />
            : <Redirect to="/login" />}
        />
    )
}

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component = {Main} />
            <Route path="/listings" component = {Listings} />
            <Route path="/addListing" component = {AddListing} />
            <Route path="/login" component={Login} />
            {/* <Route path="/login" component={Login} /> */}
            {/* <ProtectedRoute exact path="/" component={Home} /> */}
            {/* <ProtectedRoute path="/about" component={About} /> */}
            {/* <ProtectedRoute path="/business/:id" component={Car} /> */}
        </Switch>
    );
};

export default Router;