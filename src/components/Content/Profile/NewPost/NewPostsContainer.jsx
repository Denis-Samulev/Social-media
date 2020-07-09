import React from "react";
import {appPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";
import NewPosts from "./NewPosts";


const NewPostsContainer = (props) => {

    let state = props.store.getState();

    let onAddPost = () => {
        props.store.dispatch(appPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <NewPosts updateNewPostText={onPostChange}
                  addPost={onAddPost}
                  postData={state.profilePage.postData}
                  newPostText={state.profilePage.newPostText} />
    )
}


export default NewPostsContainer;