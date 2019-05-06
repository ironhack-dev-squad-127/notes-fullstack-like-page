import React from 'react';
import './App.css';
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: null
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Like Page</h1>
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
