import { connect } from 'react-redux'
import Login from '../components/Login'
import {addUser, logoff} from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (newUser) => dispatch(addUser(newUser)),
        logoff: () => dispatch(logoff())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)