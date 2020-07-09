import React from 'react';
import s from './Profile.module.css';
import Cover from "./Cover/Cover";
import AvatarDesc from "./Description/Description";
import NewPostsContainer from "./NewPost/NewPostsContainer";


const Profile = (props) => {

    return (
        <div className={s.profile}>
            <Cover />
            <AvatarDesc />
            <NewPostsContainer store={props.store} />
        </div>
    )
}


export default Profile;
