const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let initialState = {
    postData: [
        {id: 1, message: 'It is my first post', like: '10'},
        {id: 2, message: 'It is important to be happy', like: '20'},
        {id: 3, message: 'It is important to be happy', like: '30'},
        {id: 4, message: 'It is important to be happy', like: '15'},
        {id: 5, message: 'It is important to be happy', like: '15'},
        {id: 6, message: 'It is important ', like: '15'}
    ],
    newPostText: 'it-kamasutra'
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 7,
                message: state.newPostText,
                like: 0
            };
            state.postData.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const appPostActionCreator = () => {
    return ({
        type: ADD_POST
    })
}

export const updateNewPostTextActionCreator = (text) => {
    return ({
        type: UPDATE_NEW_POST_TEXT, newText: text
    })
}


export default profileReducer;