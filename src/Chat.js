import React, { Component } from 'react'
import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'



class Chat extends Component {
    constructor(){
        super()
        this.state={
            messages:[
                {id:1, userName:'billy', body:'yoyo',imgUrl: 'https://api.adorable.io/avatars/32/davey@getfretless.com'},
                {id:2, userName:'miku',body:'what\'s for dinner',imgUrl:'https://api.adorable.io/avatars/32/dana@fretless.com'},
            ],
        }
    }

    addMessage= (body)=>{
        const messages=[...this.state.messages]
        messages.push(
            {
                id:Date.now(),
                userName:this.props.user.userName,
                body,
                imgUrl:this.props.user.imgUrl,
            },
        )
        this.setState({messages})
    }

    render() {
      return (
        <div 
            className='Chat'
            style={styles} >
            <ChatHeader/>
            <MessageList messages={this.state.messages} />
            <MessageForm addMessage={this.addMessage} />

        </div>   
      )
    }
}

const styles={
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
}

export default Chat