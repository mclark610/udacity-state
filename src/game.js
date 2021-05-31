import React from 'react';

class Game extends React.Component {
    constructor(props) {
        super(props);

        const [val1,val2,val3,answer,proposedAnswer] = this.generateQuestion();
        this.state = { val1: val1,
                       val2: val2,
                       val3: val3,
                       answer:  answer,
                       proposedAnswer: proposedAnswer,
                     };

    }

    // generate random number
    getRandom = () => {
        return Math.floor(Math.random() * 100);
    }

    // create all values required to ask the question
    generateQuestion = () => {
        let val1= this.getRandom();
        let val2= this.getRandom();
        let val3= this.getRandom();
        let answer= val1+val2+val3;
        let proposedAnswer= answer+Math.floor(Math.random() * 3);

        return([val1,val2,val3,answer,proposedAnswer]);
    }

    // setup a new question for the gamer
    newQuestion = () => {
        const [val1,val2,val3,answer,proposedAnswer] = this.generateQuestion();
        this.setState({val1: val1,
                       val2: val2,
                       val3: val3,
                       answer: val1+val2+val3,
                       proposedAnswer: answer+Math.floor(Math.random() * 3)
        });
    }

    // Check if the user is correct.  if the proposed answer is correct
    // and the true button is pushed
    // If the the proposed answer is wrong and the false button is pushed,
    // the user is correct.
    //
    // Also,  setup the next question   
    checkAnswer = (e) => {
        console.log("e.target.value: " + e.target.value);
        console.log("e.target.name: " + e.target.name);

        console.log(`value 1: ${this.state.val1} value2: ${this.state.val2} value3 ${this.state.val3} proposedAnswer: ${this.state.proposedAnswer}`);
        console.log(`real answer: ${this.state.answer}`);
        console.log("target value: " + (e.target.value === "true"));

        if ((this.state.proposedAnswer == (this.state.answer) && (e.target.value === "true")) ||
           (this.state.proposedAnswer != (this.state.answer) && (e.target.value === "false"))) {
               this.props.keepScore(1);
        }
        else {
            this.props.keepScore(0);
        }

        this.newQuestion();
    }

    render() {
        return(
              <div className="game">
                <h2>Mental Math</h2>
                <div className="equation">
                  <p className="text">{`${this.state.val1} + ${this.state.val2} + ${this.state.val3} = ${this.state.proposedAnswer}`}</p>
                </div>
                <button name="true" value={true} onClick={this.checkAnswer}>True</button>
                <button name="false" value={false}onClick={this.checkAnswer}>False</button>
              </div>
        )
    }
}

export default Game;
