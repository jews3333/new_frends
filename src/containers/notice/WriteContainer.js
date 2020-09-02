import { connect } from 'react-redux';
import Write from '../../components/notice/Write';
import { db } from '../../firebase/init';
import * as actions from '../../actions';

const mapStateToProps = (state) => ({
    user: state.sign.user,
    notice: state.notice.view
});

const mapDispatchToProps = (dispatch) => ({
    onWrite: (title, content, id) => WriteHandler(title, content, id, dispatch),
    onWriteView: (id) => WirteViewHandler(id, dispatch)
});

const WriteHandler = (title, content, id) => {

    if(id) {
        db().collection("NOTICE").doc(id).update({
            title: title,
            content: content
        }).then(() => {
            alert("수정되었습니다.");
        });
    } else {
        db().collection("NOTICE").add({
            title: title,
            content: content,
            date: db.Timestamp.fromDate(new Date())
        }).then((res) => {
            alert("등록되었습니다.");
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