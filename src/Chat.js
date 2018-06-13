import React, { Component } from 'react'
import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'



class Chat extends Component {
    constructor(){
        super()
        this.state={
            messages:[
                {
                    id:1, 
                    userName:'Dana',
                    body:'what\'s for dinner',
                    imgUrl:'https://api.adorable.io/avatars/32/dana@fretless.com',
                    messageTime:'6/13/2018, 9:32:59 AM',
                },
                {
                    id:2, 
                    userName:'Davey', 
                    body:'yoyo',
                    imgUrl: 'https://api.adorable.io/avatars/32/davey@getfretless.com',
                    messageTime:'6/13/2018, 9:33:29 AM',
                },
               
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
                messageTime:new Date().toLocaleString(),
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