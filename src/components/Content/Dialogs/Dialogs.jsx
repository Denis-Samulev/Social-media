import React from "react";
import s from './Dialogs.module.css'
import Contacts from "./Contacts/Contacts";
import MessagesItems from "./Message/Message";
import {Route} from "react-router-dom";





const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <Route path='/dialogs' render={ () => <Contacts store={props.store}
                                                            // dispatch={props.dispatch}
                                                            // dialogsData={props.dialogsData}
            />} />
            <Route path='/dialogs' render={ () => <MessagesItems store={props.store}
                                                                 // dispatch={props.dispatch}
                                                                 // messagesData={props.messagesData}

            />} />
        </div>
    )
}

export default Dialogs;
