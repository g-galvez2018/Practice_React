import React, { Component } from 'react'

class ErrorBoundry extends Component {
  construct(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }

  render() {
    if (this.state.hasError) {
      return <h1>Opps that's not good</h1>
    }
  }
}

export default ErrorBoundry;