import React ,{Component} from 'react'
import './App.css'
import Todo from './todo.js'

export default class App extends Component{
  constructor(){
    super()
    this.state = {
      list: [],
      input: ''
    }
    this.addTask = this.addTask.bind(this)
    
  }
  handleChange(value){
    this.setState({input: value})
  }
  addTask(){
    this.setState({
      list:[...this.state.list, this.state.input],
      input: ''
    })
  }
  render(){
    let list = this.state.list.map((element,i) =>{
      return <Todo key={i} task={element} />
    })
    return(
    <div>
      <h1>To-Do List:</h1>
      <div>
        <input 
          value={this.state.input} 
          placeholder='Enter New Task' 
          onChange={(e) => this.handleChange(e.target.value)}/>
        <button onClick={this.addTask}>Add</button> 
      </div>
      {list}
    </div>
    )
  }
}