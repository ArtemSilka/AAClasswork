import { connect } from 'react-redux';
import { signin } from "../../actions/session_actions"
import SigninForm from './signin_form';


const msp = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'login'
})

const mdp = (dispatch, ownProps) => ({
    signinForm: (user) => dispatch(signin(user)),
});

export default connect(msp, mdp)(SigninForm)