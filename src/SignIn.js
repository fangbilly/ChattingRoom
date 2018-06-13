import React, {Component} from 'react'

class SignInForm extends Component{
    state={
        userName:'',
        imgUrl:'https://api.adorable.io/avatars/32/miles@mileszs.com',
     
    }

    handleSubmit =(ev) =>{
        
        ev.preventDefault()
        this.setState({imgUrl:`https://api.adorable.io/avatars/40/${this.state.userName}`})
        this.props.signIn(this.state.userName,this.state.imgUrl)
        this.setState({userName:''})

    }

    handleChange = (ev) =>{
        this.setState({userName:ev.target.value})
    }

    render(){
      return (
        <form 
            className='SignInForm'
            onSubmit ={this.handleSubmit}
            style={styles.SignInForm}
                         >
            <div 
                className="signInIcon" 
                style={styles.signInIcon} 
                >
                <i className="fab fa-first-order"></i>
            </div>
            <input 
                type='text' 
                name='userName' 
                placeholder='Type an userName...'
                value ={this.state.userName}
                onChange={this.handleChange}
                style={styles.input}
            />
            <button 
                type='submit' 
                style={styles.button}
                >
                <i className="fas fa-sign-in-alt" title="SignIn"></i>
            </button>

        </form>   
      )
    }
}

const styles={
    SignInForm:{
        backgroundColor: 'white',
        height: '3rem',
        display: 'flex',
        alignItems: 'stretch',
        border:' 2px solid #999',
        borderRadius:' 0.5rem',
        margin: '5rem',
        padding: '0',
    },

    signInIcon: {
        display: 'flex',
        borderRadius: '0.5rem',
        alignItems: 'center',
        backgroundColor: 'white',
        color: 'black',
        padding: '0 0.5rem',
        fontSize:' 1.2rem',
    },

    input :{
        flex: 1,
        fontSize: '1.2rem',
        border: 0,
    },

    button :{
        fontSize:' 1.5rem',
        backgroundColor: '#1A8FE3',
        color:' white',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        borderTopRightRadius: '0.5rem',
        borderBottomRightRadius: '0.5rem',
        border: '1px solid white',
    },
}

export default SignInForm