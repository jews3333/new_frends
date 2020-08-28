import { connect } from 'react-redux';
import SignUp from '../components/SignUp';
import { auth, db } from '../firebase/init';
import * as actions from '../actions';

const mapStateToProps = (state) => ({
    user: state.sign.user
});

const mapDispatchToProps = (dispatch) => ({
    onSignUp: (id, pw, name, code) => SignUpHandler(id, pw, name, code, dispatch),
    onSignIn: (id, pw) => SignInHandler(id, pw, dispatch),
    onSignOut: () => SignOutHandler(dispatch)
});

const SignUpContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);

const SignUpHandler = (id, pw, name, code, dispatch) => {

    if(code){
        db.collection("USER").doc(code).get().then((snapshot) => {

            if(snapshot.data() !== undefined){
                if (Object.keys(snapshot.data()).length === 0){
                    db.collection("USER").doc(code).set({
                        id: id,
                        name: name
                    });

                    auth().createUserWithEmailAndPassword(id, pw).then((res) => {
                        db.collection("USER").doc(code).set({
                            id: id,
                            uid: res.user.uid,
                            name: name
                        });

                        
                        dispatch(actions.signup({
                            id: res.user.email,
                            uid: res.user.uid,
                            name: name
                        }));
                    });


                } else {
                    alert("이미 가입된 정보가 있습니다.");
                }
            } else {
                alert("존재하지 않는 코드입니다.");
            }
            
        }).catch((error) => {
            console.log(error)
        })
    } else {
        alert("CODE를 입력하세요");
    }
   

    // db.collection("CODE").get().then((snapshot) => {
    //     snapshot.forEach((doc) => {
    //         if (code === doc.id) {
    //             auth().createUserWithEmailAndPassword(id, pw).then((res) => {
    //                 dispatch(actions.signin({
    //                     id: res.user.email,
    //                     uid: res.user.uid,
    //                     name: name
    //                 }));

    //                 db.collection("USER").add({
    //                     id: id,
    //                     uid: res.user.uid,
    //                     name: name
    //                 }).then((ref) => {
    //                     dispatch(actions.signin({
    //                         id: res.user.email,
    //                         uid: res.user.uid,
    //                         name: name
    //                     }));
    //                 }).catch((error) => {
    //                     console.log(error);
    //                 })

    //             }).catch((error) => {
    //                 console.log(error);
    //             });
    //         } else {
    //             alert("CODE가 일치하지 않습니다.");
    //         }
    //     })
    // })



    // auth().signInAnonymously().then((res) => {
    //     console.log(res);
    // }).catch((error) => {
    //     console.log(error);
    // })
}

const SignInHandler = (id, pw, dispatch) => {

    // db.collection("USER").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         if (doc.data().user_id === id && doc.data().user_pw === pw) {
    //             auth().signInWithEmailAndPassword().then((res) => {
    //                 dispatch(actions.signin({
    //                     user_id: doc.data().user_id,
    //                     uid: doc.id
    //                 }));
    //             }).catch((error) => {
    //                 console.log(error);
    //             })
    //         } else {
    //             alert("아이디 또는 패스워드가 일치하지 않습니다.");
    //         }
    //     });
    // });

    auth().signInWithEmailAndPassword(id, pw).then((res) => {
        dispatch(actions.signin({
            id: res.user.email,
            uid: res.user.uid
        }));

    }).catch((error) => {
        console.log(error);
    })
}

const SignOutHandler = () => {
    auth().signOut().then((res) => {
        console.log(res)
    }).catch((error) => {
        console.log(error);
    })
}

export default SignUpContainer;