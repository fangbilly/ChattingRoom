import React, { Component } from 'react'

import './App.css'
import Main from './Main'
import SignInForm from './SignIn'


class App extends Component {
  state={
    signInStatus:false,
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
      signInStatus:true,    
    })
}

signOut= ()=>{
  this.setState({
    currentUser:{},
    signInStatus:false,  
  })
}

  render() {
    if(this.state.signInStatus){
    return (
      <div className="App">
          <Main user={this.state.currentUser} signOut={this.signOut}/>
      </div>
    )}
    else{
      return(
        <div className="App">
          <h1 style={{margin:30,}} >SignIn:</h1>
          <SignInForm signIn={this.signIn} />
      </div>
      )
    }
  }
}

export default App
