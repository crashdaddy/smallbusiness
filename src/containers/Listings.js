import { connect } from 'react-redux'
import Listings from '../components/Listings'
import {removeListing, addListing} from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        listings: state.listings
   }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeListing: (listingID) => dispatch(removeListing(listingID))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Listings)
