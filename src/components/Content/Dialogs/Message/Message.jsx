import s from './Message.module.css'
import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../redux/dialogsReducer";


const Message = (props) => {
    return (
        <div className={s.messageItem}>
            {props.message}
        </div>
    )
}


const MessagesItems = (props) => {
    let state = props.store.getState().dialogPage;

    let messageElem = state.messagesData.map((m) => <Message message={m.message} id={m.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <div className={s.message}>
            <div className={s.text}>{messageElem}</div>
            <div>
                <textarea value={ newMessageBody }
                          onChange={ onNewMessageChange }
                          placeholder={'blabla'}>
                </textarea>
            </div>

            <div>
                <button onClick={ onSendMessageClick }>send</button>
            </div>
        </div>
    )
}


export default MessagesItems;