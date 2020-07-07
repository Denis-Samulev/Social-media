const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


const dialogsReducer = (state, action) => {

//
//     if (action.type === UPDATE_NEW_MESSAGE_BODY) {
//         state.newMessageBody = action.body;
//     } else if (action.type === SEND_MESSAGE) {
//         let body = state.newMessageBody;
//         state.newMessageBody = '';
//         state.messagesData.push({id: 7, message: body});
//     }
//
//     return state;

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({id: 7, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => {
    return ({
        type: SEND_MESSAGE
    })
}
export const updateNewMessageBodyCreator = (body) => {
    return ({
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    })
}

export default dialogsReducer;





