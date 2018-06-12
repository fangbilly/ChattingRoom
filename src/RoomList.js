import React from 'react'

const RoomList = (props) =>{
      return (
        <nav 
            className="RoomList"
            style={props.style}
            >
            <h2 style={styles.h2} >Rooms</h2>
            <ul style={styles.ul}>
            <li style={styles.li}><a href="#" style={styles.a}>general</a></li>
            <li style={styles.li}><a href="#" style={styles.a}>random</a></li>
            </ul>
        </nav>
        )
    }

    const styles={
        h2:{
            fontSize: '1rem',
        },

        ul:{
            listStyle: 'none',
            marginLeft: 0,
            paddingLeft: 0,
        },

        li: {
            marginBottom: '0.5rem',
          },

        a :{
            display: 'block',
            color: 'whitesmoke',
            textDecoration:' none',
        },

    }
    
export default RoomList