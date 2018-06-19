import React, { Component } from 'react'
import base from './base'
import Sidebar from './Sidebar'
import Chat from './Chat'

class Main extends Component {
  constructor() {
    super()

    this.state = {
      room: {},
      roomList:{},
    }
  }

  componentDidMount() {
    base.syncState(
      'rooms',
      {
        context: this,
        state: 'roomList',
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
    const room = this.state.roomList[roomName]
    if (room) {
      this.setState({ room })
    } else {
      this.loadValidRoom()
    }  }

  setRoomList= (roomList)=>{
    console.log('setRoomlist')
    this.setState({roomList})
  }

  removeRoom = (room) => {
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
          setRoomList={this.setRoomList}
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