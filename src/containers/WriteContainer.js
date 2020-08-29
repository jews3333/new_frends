import { connect } from 'react-redux';
import Write from '../components/notice/Write';
import { db } from '../firebase/init';
import * as actions from '../actions';

const mapDispatchToProps = (dispatch) => ({
    onWrite: (title, content) => WriteHandler(title, content, dispatch)
});

const WriteHandler = (title, content) => {

    let date = new Date();
    let yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();

    db().collection("NOTICE").add({
        title: title,
        content: content,
        date: db.Timestamp.fromDate(new Date())
    }).then((res) => {
        alert(res.id + " 등록되었습니다.");
    })
}

const WriteContainer = connect(
    mapDispatchToProps
)(Write);

export default WriteContainer;