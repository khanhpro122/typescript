import React, { Component } from 'react'

type CountState = {
    count: number
}
type MessageProps = {
    message : string
}

export default class TimeRef extends Component<MessageProps, CountState> {
    constructor(props : MessageProps) {
        super(props)
        this.state = {
            count : 0
        }

    }
  handleIncrease = () => {
        this.setState((prevState) => ({count : prevState.count + 1}))
    }
  render() {
    return (
      <div>
          {this.state.count} {this.props.message}
          <button onClick={this.handleIncrease}>Inceare</button>
      </div>
    )
  }
}
