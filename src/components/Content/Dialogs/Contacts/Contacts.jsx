import React from "react";
import './Contacts.module.css'
import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.css";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Contacts = (props) => {
    let dialogElem =
        props.dialogsData.map ((d) => <DialogItem key={d.id} name={d.name} id={d.id}/>);

    return (
        <div className={s.dialogsItems}>
            {dialogElem}
        </div>
    )

}


export default Contacts;