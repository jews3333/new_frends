import { connect } from 'react-redux';
import SignOut from '../../components/sign/SignOut';
import { auth } from '../../firebase/init';
import * as actions from '../../actions';

const mapStateToProps = (state) => ({
    user: state.sign.user
});

const mapDispatchToProps = (dispatch) => ({
    onSignOut: () => SignOutHandler(dispatch)
});

const SignOutHandler = (dispatch) => {
    auth().signOut().then((res) => {
        alert("로그이웃되었습니다.");
        dispatch(actions.signout())
    });
}

const SignOutContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignOut);

export default SignOutContainer;