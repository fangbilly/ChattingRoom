import React from 'react'



const Avatar = (props) =>{
    return (
        <div 
            className='Avatar'
            style={styles}
             >
        </div>   
      )
    }

    const imgUrl = 'https://api.adorable.io/avatars/32/nicole@yahoo.com'

    const styles={
        height: '40px',
        width: '40px',
        fontSize: '1rem',
        borderRadius: '20px',
        backgroundImage: `url(${imgUrl} )`,
    }
    
export default Avatar