import React from 'react'
import ReactDOM from 'react-dom/client'
import Counter from './counter.jsx'
// import { useState } from 'react'
// import './App.css'

import Counter from './counter.jsx'

class App extends React.Component{
  constructor (props){
    super(props)

    this.stste={
      mount:true
    }

    this.mountCounter=()=>this.setState({mount:true})
    this.unmountCounter=()=>this.setState({mount:false})
  }
  render(){
    return <div>
      <button onClick={this.mountCounter}disabled={this.state.mount}>Mount Counter</button>
      <button onClick={this.unmountCounter}disabled={!this.state.mount}>UNmount Counter</button>
      {this.state.mount?<Counter/>:null}
    </div>
  }
}

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

ReactDOM.render(<App/>,document.getElementById('root'))