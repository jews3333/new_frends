import { connect } from 'react-redux';
import SignUp from '../../components/sign/SignUp';
import { auth, db } from '../../firebase/init';
import * as actions from '../../actions';

const mapStateToProps = (state) => ({
    user: state.sign.user
});

const mapDispatchToProps = (dispatch) => ({
    onSignUp: (id, pw, name, code) => SignUpHandler(id, pw, name, code, dispatch)
});

const SignUpContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);

const SignUpHandler = (id, pw, name, code, dispatch) => {

    if(id && pw && name && code){
        db().collection("USER").where("name","==",name).get().then((users) => {
            if(users.size === 0){
                db().collection("USER").doc(code).get().then((snapshot) => {
                    if(snapshot.data() !== undefined){
                        if (Object.keys(snapshot.data()).length === 0){
        
                            auth().createUserWithEmailAndPassword(id, pw).then((res) => {
                                db().collection("USER").doc(code).set({
                                    id: id,
                                    uid: res.user.uid,
                                    name: name,
                                    class: "Frend"
                                });

                                dispatch(actions.signup({
                                    id: res.user.email,
                                    uid: res.user.uid,
                                    name: name,
                                    class: "Frend"
                                }));
                            }).catch((error) => {
                                alert(error.message);
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
                alert("닉네임 중복입니다.");
            }
        });

       
    } else {
        alert("입력칸을 모두 채워주세요.");
    }
}

export default SignUpContainer;