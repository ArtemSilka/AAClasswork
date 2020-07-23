import { connect } from 'react-redux';
import Greeting from './greeting';
import { signout } from '../../actions/session_actions';

const msp = state => ({
    currentUser: state.entities.users[state.session.id]
});

const mdp = dispatch => ({
    logout: () => dispatch(signout())
});

export default connect(msp,mdp)(Greeting);