import React, { Component } from 'react'

export default class ClassComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { value: props.initialValue }
  }

  increment(value) {
    this.setState({ value: this.state.value + value })
  }

  render() {
    return (
      <div>
        <h1>{this.props.label}</h1>
        <h1>{this.state.value}</h1>
        <button onClick={() => this.increment(-1)}>Decrese</button>
        <button onClick={() => this.increment(1)}>Increase</button>
      </div>
    )
  }
}
