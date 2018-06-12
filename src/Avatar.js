import React from 'react'



const Avatar = (props) =>{
    return (
        <div 
            className='Avatar'
            style={{...styles,backgroundImage: `url(${props.imgUrl} )`,}}
             >
        </div>   
      )
    }


    const styles={
        height: '40px',
        width: '40px',
        fontSize: '1rem',
        borderRadius: '20px',        
    }
    
export default Avatar