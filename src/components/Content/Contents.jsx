import React from "react";
import Dialogs from "./Dialogs/Dialogs";
import Profile from "./Profile/Profile";
import {Route} from "react-router-dom";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import UsersContainer from "./Users/UsersContainer";


const Content = (props) => {
    return (
        <div>
            <Route path='/dialogs' render= { () => <Dialogs store={props.store}/>}/>

            <Route path='/profile' render={ () => <Profile store={props.store}/>}/>

            <Route path='/news' component= {News} />
            <Route path='/music' component= {Music} />
            <Route path='/settings' component= {Settings} />
            <Route path='/users' render={ () => <UsersContainer /> } />
        </div>
    )
}


export default Content;