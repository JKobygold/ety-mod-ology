import React from "react";
import MessageList from './MessageList';
import TextInput from './TextInput';

function ChatWindow(){
    return(
        <div className="chat-window">
        <MessageList />
        <TextInput />
        </div>
        
    )
}

export default ChatWindow;