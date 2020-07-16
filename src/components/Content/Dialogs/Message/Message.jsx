import s from './Message.module.css'
import React from "react";


const Message = (props) => {
    return (
        <div className={s.messageItem}>
            {props.message}
        </div>
    )
}


const MessagesItems = (props) => {
    let state = props.dialogPage;

    let messageElem = state.messagesData.map((m) => <Message message={m.message} id={m.id}/>);
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
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