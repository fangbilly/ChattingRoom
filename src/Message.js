import React from 'react'



const Message = (props) =>{
    return (
        <div className='Message' >
            {props.Message.userName}:{props.Message.body}
          
        
        </div>   
      )
    }

    
export default Message