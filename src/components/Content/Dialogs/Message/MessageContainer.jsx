import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../redux/dialogsReducer";
import {connect} from "react-redux";
import MessagesItems from "./Message";

// const MessagesItemsContainer = (props) => {
//     let state = props.store.getState().dialogPage;
//
//     let onSendMessageClick = () => {
//         props.store.dispatch(sendMessageCreator())
//     }
//     let onNewMessageChange = (body) => {
//         props.store.dispatch(updateNewMessageBodyCreator(body))
//     }
//
//     return (
//         <MessagesItems updateNewMessageBody={onNewMessageChange}
//                        sendMessage={onSendMessageClick}
//                        dialogPage={state}/>
//     )
// }

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        }
    }
}


const MessagesContainer = connect (mapStateToProps, mapDispatchToProps) (MessagesItems)


export default MessagesContainer;