import React, { Component } from 'react';
import CardList from './Components/CardList';
import Nav from './Components/Nav'

class App extends Component {
  state = {
    score: 0,
    topScore: 0
  }

  scoreChangeHandle = () => {
    let score = this.state.score;
    let topScore = this.state.topScore;
    score++;
    if (topScore < score) topScore = score;
    this.setState({
      score,
      topScore
    })
  }

  onEndGame = (loose) => {
    if (loose) alert("You loose, try again!")
    if (!loose) alert("You win")
    this.setState({ score: 0 });
  }

  render() {
    return (
      <div>
        <Nav score={this.state.score} topScore={this.state.topScore} />
        <CardList onEndGame={this.onEndGame} scoreChangeHandle={this.scoreChangeHandle} />
      </div>
    );
  }
}

export default App;
