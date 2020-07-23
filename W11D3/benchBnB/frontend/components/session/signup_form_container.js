import { connect } from 'react-redux';
import { makeNewUser } from "../../actions/session_actions"
import SignupForm from './signup_form';


const msp = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'signup'
})

const mdp = (dispatch, ownProps) => ({
    signupForm: user => dispatch(makeNewUser(user)),
});

export default connect(msp, mdp)(SignupForm)