import React from 'react';
import './App.css';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: null,
      name: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(event) {
    this.setState({
      name: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault() // Stop the form submission
    axios.post("http://localhost:5000/api/likes", {
      name: this.state.name
    })
      .then(response => {
        // The element was added in the Database
        // We can clear the input (by setting `this.state.name` to "")
        // We can add an element in `this.sate.likes`
        console.log("The eleement was added", response.data)
        this.setState({
          name: "",
          likes: [...this.state.likes, response.data.data]
        })
      })

  }
  render() {
    return (
      <div className="App">
        <h1>Like Page</h1>

        <form onSubmit={this.handleSubmit}>
          <input value={this.state.name} onChange={this.handleChange} type="text" placeholder="Type your name"/>
          <button>Like</button>
        </form>

        {/* If we don't have the `this.state.likes`, we render Loading... */}
        {!this.state.likes && <div>Loading...</div>}

        {this.state.likes && <ul>
          {this.state.likes.map(like => <li key={like._id}>{like.name}</li>)}
        </ul>}
      </div>
    );
  }
  // This method is triggered after the 1st render
  componentDidMount() {
    axios.get("http://localhost:5000/api/likes")
      .then(response => {
        this.setState({
          likes: response.data
        })
      })
  }
}

export default App;
