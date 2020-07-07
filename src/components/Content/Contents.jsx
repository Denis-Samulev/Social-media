import React from "react";
import Dialogs from "./Dialogs/Dialogs";
import Profile from "./Profile/Profile";
import {Route} from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";


const Content = (props) => {
    return (
        <div>
            <Route path='/dialogs' render= { () => <Dialogs
                                                            // dialogsData={props.dialogsData}
                                                            store={props.store}
                                                            // dispatch={props.dispatch}
                                                            // messagesData={props.messagesData}
            />}

            />

            <Route path='/profile' render={ () => <Profile postData={props.postData}
                                                           dispatch={props.dispatch}
                                                           newPostText={props.newPostText}
                                                           // updateNewPostText={props.updateNewPostText}
            />}
            />
            <Route path='/news' component= {News} />
            <Route path='/music' component= {Music} />
            <Route path='/settings' component= {Settings} />
        </div>
    )
}


export default Content;