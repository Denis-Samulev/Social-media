import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../redux/dialogsReducer";
import MessagesItems from "./Message";


const MessagesItemsContainer = (props) => {
    let state = props.store.getState().dialogPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <MessagesItems updateNewMessageBody={onNewMessageChange}
                       sendMessage={onSendMessageClick}
                       dialogPage={state}/>
    )
}


export default MessagesItemsContainer;