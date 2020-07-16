import React from "react";
import {appPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";
import NewPosts from "./NewPosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(appPostActionCreator());
        }
    }
}


const NewPostsContainer = connect (mapStateToProps, mapDispatchToProps) (NewPosts)

export default NewPostsContainer;