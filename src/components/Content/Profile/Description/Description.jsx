import React from "react";
import s from './Description.module.css'

const AvatarDesc = () => {
    return (
        <div className='avatarDesc'>
            <img className={s.avatar} src="https://cutt.ly/finWl8A" alt=""/>
            <div className={s.descr}>
                Denis S.
            </div>
        </div>
    )
}

export default AvatarDesc;