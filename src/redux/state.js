let rerenderEntireTree = () => {
    console.log('State changed')
}


let state = {

    profilePage: {
        postData: [
            {id: 1, message: 'It is my first post', like:'10'},
            {id: 2, message: 'It is important to be happy', like:'20'},
            {id: 3, message: 'It is important to be happy', like:'30'},
            {id: 4, message: 'It is important to be happy', like:'15'},
            {id: 5, message: 'It is important to be happy', like:'15'},
            {id: 6, message: 'It is important ', like:'15'}
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
}


export const addPost = () => {
    let newPost = {
        id: 7,
        message: state.profilePage.newPostText,
        like: 0
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree (state);
}


export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree (state);
}


export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}


export default state;