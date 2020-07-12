import { connect } from 'react-redux'
import AddListing from '../components/AddListing'
import {addListing} from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        listings: state.listings
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addListing: (newListing) => dispatch(addListing(newListing))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddListing)