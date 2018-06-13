import React from 'react'
import { StyleSheet, css } from 'aphrodite'

const RoomList = (props) =>{
      return (
        <nav 
            className={css(styles.RoomList)}
            style={props.style}
            >
            <h2 className={css(styles.h2)} style={styles.h2} >Rooms</h2>
            <ul className={css(styles.ul)}  style={styles.ul}>
            <li className={css(styles.li)}  style={styles.li}><a href="#" className={css(styles.a)}    style={styles.a}>general</a></li>
            <li className={css(styles.li)}  style={styles.li}><a href="#" className={css(styles.a)}    style={styles.a}>random</a></li>
            </ul>
        </nav>
        )
    }

    const styles=  StyleSheet.create({
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
            ':hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              },
            
              '::before': {
                content: '"#"',
              },

        },

    })
    
export default RoomList