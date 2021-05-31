import React from 'react';

class Score extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <p className="score">
              Your Score: {this.props.numCorrect}/{this.props.numQuestions}
            </p>
        );
    }

}

export default Score;
