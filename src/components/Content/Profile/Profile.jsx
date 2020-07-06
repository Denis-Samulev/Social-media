import React from 'react';
import s from './Profile.module.css';
import Cover from "./Cover/Cover";
import AvatarDesc from "./Description/Description";
import MyPosts from "./NewPost/NewPosts";
import Post from "./Post/Post";


const Profile = (props) => {

    let postElem =
        props.postData.map ((p) => <Post id={p.id} message={p.message} like={p.like} /> );


    return (
        <div className={s.profile}>
            <Cover />
            <AvatarDesc />
            <MyPosts postData={props.postData}
                     dispatch={props.dispatch}
                     newPostText={props.newPostText}
                     // updateNewPostText={props.updateNewPostText}
            />

            { postElem }
        </div>
    )
}


export default Profile;
