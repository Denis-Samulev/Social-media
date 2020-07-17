import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../redux/dialogsReducer";
import {connect} from "react-redux";
import MessagesItems from "./Message";


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