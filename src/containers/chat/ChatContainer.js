import { connect } from 'react-redux';
import Chat from '../../components/chat/Chat';
import { db } from '../../firebase/init';
import * as actions from '../../actions';

const mapStateToProps = (state) => ({
    user: state.sign.user,
    chat: state.chat.list
});

const mapDispatchToProps = (dispatch) => ({
    onChatList: () => ChatListHandler(dispatch),
    onChatWrite: (content, uid) => ChatWriteHandler(content, uid, dispatch),
    onReplyWrite: (chatId, content, uid) => ReplyWriteHandler(chatId, content, uid, dispatch),
    onReplyDelete: (chatId, replyId, uid) => ReplyDeleteHandler(chatId, replyId, uid, dispatch),
});

const ChatListHandler = (dispatch) => {
    let data = {};
    db().collection("CHAT").get().then((snapshot) => {
        snapshot.forEach(async (doc) => {
            //dispatch(actions.chatList(doc));
            // const id = doc.id;
            // db().collection("CHAT").doc(id).collection('REPLY').get().then((res) => {
            //     res.forEach((reply) => {
            //        dispatch(actions.replyList({id, reply}))
            //     });
            // })
            data = {
                ...data,
                [doc.id] : {
                    content : doc.data().content,
                    writer: doc.data().uid,
                    date: doc.data().date,
                    reply: null          
                }
            }

            await db().collection("CHAT").doc(doc.id).collection('REPLY').get().then((res) => {
                res.forEach((reply) => {
                    data = {
                        ...data,
                        [doc.id] : {
                            ...data[doc.id],
                            reply: {
                                ...data[doc.id].reply,
                                [reply.id] : reply.data()
                            }
                        }
                    }
                });
            });

            dispatch(actions.chatList(data));
        });
    });
}

const ChatWriteHandler = (content, uid) => {
    db().collection("CHAT").add({
        content: content,
        writer: uid,
        date: db.Timestamp.fromDate(new Date())
    }).then(() => {
        alert("등록되었습니다.");
    });
}

const ReplyWriteHandler = (chatId, content, uid) => {
    db().collection("CHAT").doc(chatId).collection("REPLY").add({
        content: content,
        writer: uid,
        date: db.Timestamp.fromDate(new Date())
    }).then(() => {
        alert("등록되었습니다.");
    });
}

const ReplyDeleteHandler = (chatId, replyId, uid) => {
    db().collection("CHAT").doc(chatId).collection("REPLY").doc(replyId).get().then((doc) => {
        if(doc.writer === uid){
            db().collection("CHAT").doc(chatId).collection("REPLY").doc(replyId).delete().then(() => {
                alert("삭제되었습니다..");
            });
        } else {
            alert("작성자 본인이 아닙니다.");
        }
    });
}

const ChatContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Chat);

export default ChatContainer;