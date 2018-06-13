import React from 'react'



const UserInfo = (props) =>{
    return (
        <div 
            className="UserInfo"
            style={{...styles.UserInfo,...props.style}}
            >
            <div className="Avatar" style={{...styles.Avatar,backgroundImage: `url(${props.user.imgUrl})`,}} ></div>
            <div className="user" style={styles.user} >
                {props.user.userName}
            </div>
            {/* <a href="#"> */}
            <button style={styles.a}>
                <i className="fas fa-sign-out-alt"  ></i>
            </button>
            {/* </a> */}
      </div> 
      )
}


const styles={
    UserInfo:{
        marginBottom: '1rem',
        display: 'flex',
        alignItems: 'center',
    },

    Avatar:{
        marginRight: '0.5rem',
        height: '40px',
        width: '40px',
        borderRadius: '20px',
    },

    user:{
        flex: 1,
    },

    a:{
        border: 0,
        padding: 0,
        backgroundColor:' transparent',
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: '1.2rem',
        transition: 'color 0.25s ease-out',
    }

}
    
export default UserInfo