import React, { Component } from 'react'
import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

import base from './base'



class Chat extends Component {
    constructor(){
        super()
        this.state={
            general:[{
                id:'Date.now()',
                userName:'this.props.user.userName',
                body:'',
                imgUrl:'this.props.user.imgUrl',
                messageTime:'new Date().toLocaleString()',
            },],         
            random:[],
        }
    }

    componentWillMount() {
            base.syncState('general', {
              context: this,
              state: 'general',
              asArray: true,
            })

            base.syncState('random', {
                context: this,
                state: 'random',
                asArray: true,
              })
          }

    addMessage= (body,messageRoom)=>{
        const messages=[...this.props.messageRoom]
        messages.push(
            {
                id:Date.now(),
                userName:this.props.user.userName,
                body,
                imgUrl:this.props.user.imgUrl,
                messageTime:new Date().toLocaleString(),
            },
        )
        this.setState({messageRoom:messages})
    }

    

    render() {
        debugger
      return (
        <div 
            className='Chat'
            style={styles} >
            <ChatHeader/>
            <MessageList messages={this.state[this.props.messageRoom]}  />
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