import React, { Component } from 'react'
import base from './base'
import Sidebar from './Sidebar'
import Chat from './Chat'

class Main extends Component {
  constructor() {
    super()

    this.state = {
      room: {},
      rooms:{},
    }
  }

  componentDidMount() {
    base.syncState(
      'rooms',
      {
        context: this,
        state: 'rooms',
        then:()=>{this.loadRoom(this.props.match.params.roomName)},
      }
    )    
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.roomName !== this.props.match.params.roomName) {
      this.loadRoom(this.props.match.params.roomName)
    }
  }

  loadRoom = (roomName) => {
    if (roomName === 'newPrivate') return null
    if (roomName === 'newPublic') return null
    
    const room = this.state.rooms[roomName]
    if (room) {
      this.setState({ room })
    } else {
      this.loadValidRoom()
    }  }

  removeRoom = (room) => {
    if (room.name === 'general') return null
    const rooms = {...this.state.rooms}
    rooms[room.name] = null

    this.setState(
      { rooms },
      this.loadValidRoom,
    )
  }

  loadValidRoom = () => {
    const realRoomName = Object.keys(this.state.rooms).find(
      roomName => this.state.rooms[roomName]
    )
    this.props.history.push(`/rooms/${realRoomName}`)
  }

  render() {
    return (
      <div className="Main" style={styles}>
        <Sidebar
          user={this.props.user}
          signOut={this.props.signOut}
          users={this.props.users}
        />
        <Chat
          user={this.props.user}
          room={this.state.room}
          removeRoom={this.removeRoom}
        />
      </div>
    )
  }
}

const styles = {
  display: 'flex',
  alignItems: 'stretch',
  height: '100vh',
}

export default Main