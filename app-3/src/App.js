import React,{Component} from 'react'
import './App.css'

export default class App extends Component{
  constructor(){
    super()
    this.state={
      list: ['Pizza', 'Burrito', 'Steak', 'Orange', 'Ice cream'],
      filter:''
    }
  }
  handleChange(filter){
    this.setState({
      filter: filter
    })
  }
  render(){
    let list = this.state.list.filter((element) =>{
      return element.includes (this.state.filter)})
      .map((element,index) => {
        return <h2 key={index}>{element}</h2>
      })
    return (
      <div className='App'>
        <input onChange={element => this.handleChange(element.target.value)}type='text'/>
        {list}
      </div>
    )
  }
}