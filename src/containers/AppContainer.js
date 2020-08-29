import { connect } from 'react-redux';
import App from '../App';
import { auth, db } from '../firebase/init';
import * as actions from '../actions';

const mapStateToProps = (state) => ({
    user: state.sign.user
});

const mapDispatchToProps = (dispatch) => ({
    onSignState: () => SignStateHandler(dispatch)
});

const SignStateHandler = (dispatch) => {
    auth().onAuthStateChanged((user) => {
        if(user){

            db().collection('USER').get().then((snapshot) => {
                snapshot.forEach((doc) => {
                    if(doc.data().uid === user.uid) {
                        dispatch(actions.signin({
                            id: doc.data().id,
                            uid: doc.data().uid,
                            name: doc.data().name
                        }));
                    }
                });
            });
    
        }
    });
}

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;