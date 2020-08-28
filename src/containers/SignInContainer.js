import { connect } from 'react-redux';
import SignIn from '../components/SignIn';

const mapStateToProps = (state) => ({
    user: state.sign.user
});

const SignInContainer = connect(
    mapStateToProps
)(SignIn);

export default SignInContainer;