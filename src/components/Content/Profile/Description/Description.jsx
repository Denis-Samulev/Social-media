import React from "react";
import s from './Description.module.css'

const AvatarDesc = () => {
    return (
        <div className='avatarDesc'>
            <img className={s.avatar} src="https://cutt.ly/finWl8A" alt=""/>
            <div className={s.descr}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus et harum.
            </div>
        </div>
    )
}

export default AvatarDesc;