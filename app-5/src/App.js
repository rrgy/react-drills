import React, {Component} from 'react'
import './App.css'
import Image from './Image'

export default class App extends Component{
  render(){
    return(
      <div>
        <Image img={'https://www.todaysparent.com/wp-content/uploads/2017/06/when-your-kid-becomes-a-meme-1024x576-1497986561.jpg'} />
      </div>
    )
  }
}