import React from "react";
import s from './Post.module.css'


const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://joker.ykt.ru/uploads/posts/2010-01/1262796143_1024x768-avatar-1.jpg" alt=""/>
            <em>
                {props.message}
            </em>
         <div className={s.like}>
                like: {props.like}
            </div>
        </div>
    )
}


export default Post;