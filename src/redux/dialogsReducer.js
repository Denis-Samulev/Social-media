const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
    messagesData: [
        {id: 1, message: 'Lorem ipsum dolor.'},
        {id: 2, message: 'Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.'},
        {id: 3, message: 'Lorem ipsum dolor.'},
        {id: 4, message: 'Lorem ipsum dolor orem ipsum dolor.'},
        {id: 5, message: 'Lorem ipsum dolor orem ipsum dolor lorem ipsum dolor.'},
        {id: 6, message: 'Lorem ipsum dolor.'}
    ],
    dialogsData: [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Dmitry'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Valera'},
        {id: 6, name: 'Viktor'}
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {


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





