import React from "react";
import s from './NewPosts.module.css'
import Post from "../Post/Post";


const NewPosts = (props) => {
    let postElem = props.postData.map ((p) => <Post id={p.id} message={p.message} like={p.like} /> );

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
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
                <button onClick={onAddPost}>add post</button>
            </div>
            <div>
                { postElem }
            </div>

        </div>

    )
}


export default NewPosts;