import React from 'react'



const MessageList = () =>{
    const messages = [
        {id: 1, userName:'billy', body:'yoyo' },
        {id:2, userName:'miku',body:'what is dinner'}
    ]

      return (
        <div className='MessageList' >
            {messages.map(message => (
            <div key={message.id}>
            {message.userName}:{message.body}
            </div>
            )
        )
        }
        </div>   
      )
    }

    
export default MessageList