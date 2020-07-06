const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let store = {
    _state: {

        profilePage: {
            postData: [
                {id: 1, message: 'It is my first post', like: '10'},
                {id: 2, message: 'It is important to be happy', like: '20'},
                {id: 3, message: 'It is important to be happy', like: '30'},
                {id: 4, message: 'It is important to be happy', like: '15'},
                {id: 5, message: 'It is important to be happy', like: '15'},
                {id: 6, message: 'It is important ', like: '15'}
            ],
            newPostText: 'it-kamasutra'
        },

        dialogPage: {
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
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 7,
                message: this._state.profilePage.newPostText,
                like: 0
            };
            this._state.profilePage.postData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const appPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, newText: text
    }
}



export default store;
// window.store = store;