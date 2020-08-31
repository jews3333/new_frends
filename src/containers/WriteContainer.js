import { connect } from 'react-redux';
import Write from '../components/notice/Write';
import { db } from '../firebase/init';
import * as actions from '../actions';

const mapStateToProps = (state) => ({
    user: state.sign.user,
    notice: state.notice.list
});

const mapDispatchToProps = (dispatch) => ({
    onWrite: (title, content) => WriteHandler(title, content, dispatch),
    onWriteView: (id) => WirteViewHandler(id, dispatch)
});

const WriteHandler = (title, content, id) => {

    if(id) {
        db().collection("NOTICE").doc(id).set({
            title: title,
            content: content
        }).then((res) => {
            alert(res.id + " 수정되었습니다.");
        });
    } else {
        db().collection("NOTICE").add({
            title: title,
            content: content,
            date: db.Timestamp.fromDate(new Date())
        }).then((res) => {
            alert(res.id + " 등록되었습니다.");
        });
    }
}

const WirteViewHandler = (id, dispatch) => {

    db().collection("NOTICE").doc(id).get().then((doc) => {
        dispatch(actions.noticeView(doc));
    });
};

const WriteContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Write);

export default WriteContainer;