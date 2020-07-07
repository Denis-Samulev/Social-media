const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const profileReducer = (state, action) => {

    // if (action.type === ADD_POST) {
//     let newPost = {
//             id: 7,
//             message: state.newPostText,
//             like: 0
//     };
//     state.postData.push(newPost);
//     state.newPostText = '';
//
// } else if (action.type === UPDATE_NEW_POST_TEXT) {
//     state.newPostText = action.newText;
// }
//
// return state;

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