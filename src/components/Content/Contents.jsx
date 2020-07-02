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
            <Route path='/dialogs' render= { () => <Dialogs messagesData={props.messagesData}
                                                            dialogsData={props.dialogsData}/>} />

            <Route path='/profile' render={ () => <Profile postData={props.postData}
                                                           addPost={props.addPost}
                                                           newPostText={props.newPostText}
                                                           updateNewPostText={props.updateNewPostText}
            />}
            />
            <Route path='/news' component= {News} />
            <Route path='/music' component= {Music} />
            <Route path='/settings' component= {Settings} />
        </div>
    )
}


export default Content;