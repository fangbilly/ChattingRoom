import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Chat from './Chat'



class Main extends Component {
    state={
        messageRoom:'general',
    }

    setRoom= (messageRoom) =>{
        this.setState({messageRoom})
    }

    render() {
      return (
        <div className='Main' style={styles} >
            <Sidebar user={this.props.user} signOut={this.props.signOut} setRoom={this.setRoom} />
            <Chat user={this.props.user} messageRoom={this.state.messageRoom} />
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