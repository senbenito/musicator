import React, { Component } from 'react';
import './App.css';
import Tunes from './components/Tunes'
import { Button } from 'react-bootstrap';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      song : "msSc7Mv0QHY"
    }
    this.playChix = this.playChix.bind(this);
    this.playCats = this.playCats.bind(this);
    this.playDogs = this.playDogs.bind(this);
  }

  playChix (Song, event){
   this.setState({
     song: "msSc7Mv0QHY"
   })
  }

  playCats (Song, event){
   this.setState({
     song: "J7UwSVsiwzI"
   })
  }

  playDogs (Song, event){
   this.setState({
     song: "y3PcelCeraw"
   })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Time for MUSIC!!</h2>
        </div>
        <Tunes
          song={this.state.song}
        />
        <Button onClick={(event) => this.playChix()}> Techno Chix here </Button>
        <Button onClick={(event) => this.playCats()}> Space Cats here </Button>
        <Button onClick={(event) => this.playDogs()}> Imperial Borks here </Button>
      </div>
    );
  }
}

export default App;
