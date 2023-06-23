import React, { Component } from 'react'
import buffer from "./buffer.gif"

export class Buffer extends Component {
  render() {
    return (
      <div className='container text-center'>
        <img src={buffer} alt="noting" style={{width : "35px" ,height : "35px" , margin: "10px"}}/>
      </div>
    )
  }
}

export default Buffer