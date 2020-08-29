import { connect } from 'react-redux';
import Write from '../components/notice/Write';
import { db } from '../firebase/init';

const mapStateToProps = (state) => ({
    user: state.sign.user
});

const mapDispatchToProps = (dispatch) => ({
    onWrite: (title, content) => WriteHandler(title, content, dispatch)
});

const WriteHandler = (title, content) => {

    db().collection("NOTICE").add({
        title: title,
        content: content,
        date: db.Timestamp.fromDate(new Date())
    }).then((res) => {
        alert(res.id + " 등록되었습니다.");
    })
}

const WriteContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Write);

export default WriteContainer;