import React from "react";
import s from './NewPosts.module.css'
import {appPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";


const NewPosts = (props) => {
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(appPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }


    return (
        <div className={s.title}>
            <h2>My posts</h2>
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText}>
                </textarea>
            </div>
            <div>
                <button onClick={addPost}>add post</button>
            </div>
        </div>

    )
}


export default NewPosts;