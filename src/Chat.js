import React, { Component } from 'react'
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import MessageForm from './MessageForm';



class Chat extends Component {
    constructor(){
        super()
        this.state={
            messages:[
                {id:1, userName:'billy', body:'yoyo' },
                {id:2, userName:'miku',body:'what is dinner'},
            ],
        }
    }
    render() {
      return (
        <div className='Chat' >
            <ChatHeader/>
            <MessageList messages={this.state.messages}/>
            <MessageForm/>

        </div>   
      )
    }
}

export default Chat