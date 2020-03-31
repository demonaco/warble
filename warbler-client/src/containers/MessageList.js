import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchMaster } from "../store/actions/messages";

class MessageList extends Component {
    componentDidMount(){
        this.props.fetchMessages();
    }
    render() {
        const { message } = this.props
        let messageList = messages.map(m => (
            <MessageItem 
            key={m._id} 
            date={m.createAt} 
            text={m.text} 
            username={m.user.username}
            profileImageUrl={m.user.profileImageUrl}/>
        ))
}
}

function mapStateToProps(state) {
    return {
        messages: state.messages
    };
}

export default connect(mapStateToProps, { fetchMessages })(MessageList);