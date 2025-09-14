import React, { Component, createRef } from 'react';

// Child component that receives props
class ChildComponent extends Component {
  render() {
    return (
      <div>
        <h2>Child Component</h2>
        <p>Message from Parent: {this.props.message}</p>
      </div>
    );
  }
}

// Main App component
class App extends Component {
  constructor(props) {
    super(props);
    // Initializing state in the constructor
    this.state = {
      message: 'Hello from Parent!',
      inputValue: ''
    };

    // Creating a ref to access the input element
    this.inputRef = createRef();
  }

  handleChange = (event) => {
    // Updating state with the input value
    this.setState({ inputValue: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // Setting the message in state to the input value
    this.setState({ message: this.state.inputValue });
    // Clearing the input field after submission
    this.inputRef.current.value = '';
  }

  render() {
    return (
      <div>
        <h1>Main App Component</h1>
        {/* Rendering ChildComponent and passing props */}
        <ChildComponent message={this.state.message} />
        
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Type a new message"
            onChange={this.handleChange}
            ref={this.inputRef} // Using refs to access the input element
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
