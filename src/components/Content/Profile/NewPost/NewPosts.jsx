import React from "react";
import s from './NewPosts.module.css'


const NewPosts = (props) => {

    let newPostElement =React.createRef();

    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }


    return (
        <div className={s.title}>
            <h2>My posts</h2>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
            </div>
            <div>
                <button onClick={addPost}>add post</button>
            </div>
        </div>

    )
}


export default NewPosts;