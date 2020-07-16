import React from "react";
import s from './Dialogs.module.css'
import {Route} from "react-router-dom";
import MessagesItemsContainer from "./Message/MessageContainer";
import DialogContainer from "./Contacts/ContentsContainer";


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <Route path='/dialogs' render={ () => <DialogContainer store={props.store} />}/>
            <Route path='/dialogs' render={ () => <MessagesItemsContainer store={props.store} />}/>
        </div>
    )
}


export default Dialogs;
