import React from 'react'
import Message from './Message';



const MessageList = () =>{
    const messages = [
        {id:1, userName:'billy', body:'yoyo' },
        {id:2, userName:'miku',body:'what is dinner'}
    ]

      return (
        <div className='MessageList' >
            {messages.map(msg => (<Message key={msg.id} Message={msg} />
            ))
        }
        </div>   
      )
    }

    
export default MessageList