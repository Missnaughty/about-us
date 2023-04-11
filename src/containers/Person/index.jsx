import React, { Component } from 'react'

class Person extends Component {
  state = {
    count: 1,
  }

  handleClick = () => {
    this.setState(prevState => {
      return {count: prevState.count + 1};
    });
    console.log(this.state.count) // 2
    
    this.setState(prevState => {
      return {count: prevState.count + 1};
    });
    console.log(this.state.count) // 3
  }
  render() {
    return (
      <>
        <button onClick={this.handleClick}>加1</button>
        <div>{this.state.count}</div>
      </>
    )
  }
}

export default Person

