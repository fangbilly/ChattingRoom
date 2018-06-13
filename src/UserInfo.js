import React, {Component}  from 'react'
import { StyleSheet, css } from 'aphrodite'


class UserInfo extends Component {
    handleClick =(ev) =>{
        
        this.props.signOut()
        

    }

    render(){
    return (
        <div 
        className={css(styles.UserInfo)}
            style={{...styles.UserInfo,...this.props.style}}
            >
            <div className={css(styles.Avatar)} style={{...styles.Avatar,backgroundImage: `url(${this.props.user.imgUrl})`,}} ></div>
            <div className={css(styles.user)} style={styles.user} >
                {this.props.user.userName}
            </div>
            {/* <a href="#"> */}
            <button className={css(styles.button)} onClick={this.handleClick.bind(this)} >
                <i className="fas fa-sign-out-alt"  ></i>
            </button>
            {/* </a> */}
      </div> 
      )
    }
}


const styles=  StyleSheet.create({
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

    button:{
        border: 0,
        padding: 0,
        backgroundColor:' transparent',
        color: 'rgba(255, 255, 255, 0.6)',
        fontSize: '1.2rem',
        transition: 'color 0.25s ease-out',
        ':hover': {
            color: 'white',
        },
    }

})
    
export default UserInfo