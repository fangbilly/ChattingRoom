import React from 'react'

const ChatHeader = ({ room, removeRoom }) => {
  const handleClick = (ev) => {
    if (room.name === 'general') return null
    if (window.confirm(`Are you sure about deleteing room #${room.name}?`)) {
      removeRoom(room)
    }
  }

  const showMembers =(ev) =>{
    if(room.members){
    let membersList=
    room.members.map(member=>member.label).join(', ').replace(/(.*),(.*)$/, "$1 &$2")
    
    alert(`This room has members: ${membersList} `)
    }else{
      alert(`This is a public room !`)
    }
  }

  return (
    <div className="ChatHeader" style={styles.header}>
      <div className="roomInfo">
        <h2 style={styles.h2}>
          #{room.name}
        </h2>
        <p style={styles.p}>
          {room.description}
        </p>
      </div>
      <button 
            style={styles.button}
            onClick={showMembers}
            title='show members'
          >
            <i className="fas fa-users"></i>
      </button>
      <button 
        style={styles.button}
        onClick={handleClick}
        title='delete room'
      >
      {/* { room.name !== "general" &&( */}
        <i className="far fa-trash-alt"></i>
      </button>
    </div>
  )
}

const styles = {
  header: {
    backgroundColor: '#f3f3f3',
    borderBottom: '1px solid #ccc',
    height: '3rem',
    padding: '0 1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  h2: {
    fontSize: '1.1rem',
    margin: 0,
  },

  p: {
    color: '#999',
    margin: 0,
    fontSize: '0.8rem',
  },
  button: {
    border: 0,
    outline: 0,
    padding: 0,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    color: 'rgba(0,0,0, 0.4)',
    fontSize: '1rem',
  },

}

export default ChatHeader