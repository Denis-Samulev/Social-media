import React from "react";
import {connect} from "react-redux";
import Contacts from "./Contacts";



let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
}


const DialogContainer = connect (mapStateToProps) (Contacts)

export default DialogContainer;