import React from "react";
import s from './Dialogs.module.css'
import Contacts from "./Contacts/Contacts";
import {Route} from "react-router-dom";
import MessagesItemsContainer from "./Message/MessageContainer";


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>

            <Route path='/dialogs' render={ () => <Contacts store={props.store} />}/>
            <Route path='/dialogs' render={ () => <MessagesItemsContainer store={props.store} />}/>
        </div>
    )
}


export default Dialogs;
