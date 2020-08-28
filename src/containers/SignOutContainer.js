import { connect } from 'react-redux';
import SignOut from '../components/SignOut';
import { auth } from '../firebase/init';

const mapDispatchToProps = (dispatch) => ({
    onSignOut: () => SignOutHandler(dispatch)
});

const SignOutHandler = () => {
    auth().signOut().then((res) => {
        alert("로그이웃되었습니다.");

    });
}

const SignOutContainer = connect(
    mapDispatchToProps
)(SignOut);

export default SignOutContainer;