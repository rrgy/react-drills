import React, {Component} from 'react'

export default class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            username: '',
            password: ''
        }
        this.userLogin = this.userLogin.bind(this)
    }
    userName(name){
        this.setState({username: name})
    }
    passWord (pass){
        this.setState({password: pass})
    }
    userLogin(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }
    render(){
        return(
            <div>
                <input onChange={e => this.userName(e.target.value)} type='text'/>
                <input onChange={e => this.passWord(e.target.value)} type='text'/>
                <button onClick={this.userLogin}>Login</button>
            </div>
        )
    }
}