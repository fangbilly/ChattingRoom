import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import { Route, Switch, Link } from 'react-router-dom'
import RoomLink from './RoomLink'
import PublicRoomForm from './PublicRoomForm'
import PrivateRoomForm from './PrivateRoomForm'
import base from './base'

class RoomList extends Component {
  state = {
    rooms: {},
  }

  componentDidMount() {
    base.syncState(
      'rooms',
      {
        context: this,
        state: 'rooms',
      }
    )
  }

  
  addRoom = (room) => {
    const rooms = {...this.state.rooms}
    rooms[room.name] = room
    this.setState({ rooms })
    
  }

  render() {
    return (
      <Switch>
        <Route
          path="/rooms/newPrivate"
          render={
            navProps => (
              <PrivateRoomForm
                addRoom={this.addRoom}
                users={this.props.users}
                {...navProps}
              />
            )
          }
        />
        <Route
          path="/rooms/newPublic"
          render={
            navProps => (
              <PublicRoomForm
                addRoom={this.addRoom}
                users={this.props.users}
                {...navProps}
              />
            )
          }
        />
        <Route
          render={
            () => (
              <nav
                className={`RoomList ${css(styles.nav)}`}
              >
                <div className="public rooms">
                  <div className={css(styles.heading)}>
                    <h2 className={css(styles.h2)}>Rooms</h2>
                    <Link
                      className={css(styles.button)}
                      to="/rooms/newPublic"
                    >
                      <i className="fas fa-plus-circle" title="Add room"></i>
                    </Link>
                  </div>
                  <ul className={css(styles.list)}>
                    { 
                      Object.keys(this.state.rooms).map(roomName => (
                        this.state.rooms[roomName].public &&
                        (<RoomLink
                          key={roomName}
                          room={this.state.rooms[roomName]}
                        />)
                      ))
                    }
                  </ul>
                </div>
                <div className="private Rooms">
                  <div className={css(styles.heading)}>
                    <h2 className={css(styles.h2)}>Private Rooms</h2>
                    <Link
                      className={css(styles.button)}
                      to="/rooms/newPrivate"
                    >
                      <i className="fas fa-plus-circle" title="Add room"></i>
                    </Link>
                  </div>
                  <ul className={css(styles.list)}>
                    { 
                      Object.keys(this.state.rooms).map(roomName => (
                        !this.state.rooms[roomName].public
                        ) &&
                        this.state.rooms[roomName].members.map(Element =>(
                          Element.label === `${this.props.user.displayName} (${this.props.user.email})`
                         &&
                        (<RoomLink
                          key={roomName}
                          room={this.state.rooms[roomName]}
                        />)
                        ))
                      )
                    }
                  </ul>
                </div>
              </nav>
            )
          }
        />
      </Switch>
    )   
  }
}

const styles = StyleSheet.create({
  nav: {
    padding: '0 1rem',
  },

  h2: {
    fontSize: '1rem',
  },

  list: {
    listStyle: 'none',
    marginLeft: 0,
    paddingLeft: 0,
  },

  heading: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  button: {
    border: 0,
    backgroundColor: 'transparent',
    outline: 0,
    padding: 0,
    fontSize: '1rem',
    color: 'rgba(255,255,255, 0.4)',
    cursor: 'pointer',
    transition: 'color 0.25s ease-out',

    ':hover': {
      color: 'white',
    }
  },
})

export default RoomList