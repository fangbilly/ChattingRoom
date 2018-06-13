import React, {Component} from 'react'

class SignInForm extends Component{
    state={
        userName:'',
        imgUrl:'',
     
    }

    handleSubmit =(ev) =>{
        
        ev.preventDefault()
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
                         >
            userName:
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
                <i className="far fa-paper-plane" title="SignIn"></i>
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
        margin: '0.25rem',
        padding: '0',
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