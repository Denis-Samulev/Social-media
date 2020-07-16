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
                    postData={props.state}
                    newPostText={props.state}
                    store={props.store}
                    dispatch={props.dispatch}
                />
            </div>
        </div>
    )
}


export default App;
