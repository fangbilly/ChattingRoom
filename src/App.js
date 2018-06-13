import React, { Component } from 'react'

import './App.css'
import Main from './Main'
import SignInForm from './SignIn'


class App extends Component {
  state={
    signIn:false,
    currentUser:{},
        
    // user:{
    //   uid:'No.89757',
    //   userName:'JJ Lin',
    //   imgUrl:'https://api.adorable.io/avatars/32/miles@mileszs.com',
    // },
  }

  signIn= (userName,imgUrl)=>{
    const currentUser = {
      userID:Date.now(),
      userName,
      imgUrl,
    }
    
    this.setState({
      currentUser,
      signIn:true,
    
    })
}

  render() {
    if(this.state.signIn){
    return (
      <div className="App">
          <Main user={this.state.currentUser}/>
      </div>
    )}
    else{
      return(
        <div className="App">
          <SignInForm signIn={this.signIn} />
      </div>
      )
    }
  }
}

export default App
