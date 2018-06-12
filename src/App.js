import React, { Component } from 'react'

import './App.css'
import Main from './Main'


class App extends Component {
  state={
    user:{
      uid:'No.89757',
      userName:'JJ Lin',
      imgUrl:'https://api.adorable.io/avatars/32/miles@mileszs.com',
    },
  }

  render() {
    return (
      <div className="App">
          <Main user={this.state.user}/>
      </div>
    )
  }
}

export default App
