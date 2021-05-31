import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Game from './game';
import Score from './score';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { numCorrect: 0,
                   numQuestions: 0
                 };
  }
  // send this function in to Game to update whether the user is correct or not.
  keepScore = (isCorrectAnswer ) => {
      this.setState( {numCorrect: this.state.numCorrect + isCorrectAnswer} );
      this.setState( {numQuestions: this.state.numQuestions+ 1} );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <Game keepScore={this.keepScore}/>
        <Score numCorrect={this.state.numCorrect} numQuestions={this.state.numQuestions} />
      </div>
    );
  }
}

export default App;
