import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Chat from './Chat'



class Main extends Component {
    state={
        room:{
            name:'xtern',
            description:'xtern room',

        },
    }

    setRoom= (room) =>{
        this.setState({room})
    }

    render() {
      return (
        <div className='Main' style={styles} >
            <Sidebar 
                user={this.props.user} 
                signOut={this.props.signOut} 
                setRoom={this.setRoom} />
            <Chat user={this.props.user} room={this.state.room} />
        </div>    
      )
    }
}

const styles={
    display:'flex',
    alignItem:'stretch',
    height:'100vh',
}

export default Main