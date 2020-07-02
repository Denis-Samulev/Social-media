import s from "../Dialogs.module.css";
import React from "react";


const Message = (props) => {
    return (
        <div className={s.messageItem}>
            {props.message}
        </div>
    )
}


let newMessElements=React.createRef();
let addMess = () => {
    let text = newMessElements.current.value;
    console.log(text);
}




const MessagesItems = (props) => {
    let messageElem =
        props.messagesData.map((m) => <Message key={m.id} message={m.message} id={m.id}/>);

    return (
        <div className={s.message}>
            {messageElem}
            
            <div>
                <textarea ref={newMessElements}></textarea>
            </div>

            <div>
                <button onClick={addMess}>add mess</button>
            </div>
        </div>
    )
}


export default MessagesItems;