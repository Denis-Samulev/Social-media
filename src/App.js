import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Navbar";
import Content from "./components/Content/Contents";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Nav/>

            <div className='content-wrapper'>
                <Content
                    messagesData={props.state.dialogPage.messagesData}
                    dialogsData={props.state.dialogPage.dialogsData}
                    postData={props.state.profilePage.postData}
                    newPostText={props.state.profilePage.newPostText}
                    dispatch={props.dispatch}
                />
            </div>
        </div>
    )
}


export default App;
