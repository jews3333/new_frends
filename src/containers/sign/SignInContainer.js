import { connect } from 'react-redux';
import SignIn from '../../components/sign/SignIn';
import { auth, db } from '../../firebase/init';
import * as actions from '../../actions';

const mapStateToProps = (state) => ({
    user: state.sign.user
});

const mapDispatchToProps = (dispatch) => ({
    onSignIn: (id, pw) => SignInHandler(id, pw, dispatch),
    onSignOut: () => SignOutHandler(dispatch)
});

const SignInHandler = (id, pw, dispatch) => {

    auth().signInWithEmailAndPassword(id, pw).then((res) => {

        db().collection('USER').get().then((snapshot) => {
            snapshot.forEach((doc) => {
                if(doc.data().uid === res.user.uid) {
                    alert("로그인되었습니다.");
                    dispatch(actions.signin({
                        id: doc.data().id,
                        uid: doc.data().uid,
                        name: doc.data().name,
                        class: doc.data().class
                    }));
                }
            });
        });

    }).catch((error) => {
        alert(error.message);
    });

}

const SignOutHandler = () => {
    auth().signOut();
}

const SignInContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignIn);

export default SignInContainer;