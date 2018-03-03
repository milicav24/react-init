import React, { Component } from 'react';

export default class MyCustomComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stringLetters1: 'ABCDEFGHIJKLM',
      stringLetters2: 'NOPQRSTUVWXYZ',
      List: [
        'paradajz',
        'televizor',
        'patka',
        'palatalizacija',
        'gangrena',
        'policija'
      ],
      word: 'paradajz',
      mistakes: 0
    };
}

  render() {
    return (
      <div>
        <Picture mistakes={this.state.mistakes} />
        <Word word1={this.state.word} />
        <div className="boxx">
          <ToList1 stringLetters1={this.state.stringLetters1}  />
          <ToList2 stringLetters2={this.state.stringLetters2} />
        </div>
      </div>
    );
  }
}
const Picture = props => {
  var L = [];
  L.push(<img src="picture0.png" className="pic" />);
  L.push(<img src="picture1.png" className="pic" />);
  L.push(<img src="picture2.png" className="pic" />);
  L.push(<img src="picture3.png" className="pic" />);
  L.push(<img src="picture4.png" className="pic" />);
  L.push(<img src="picture5.png" className="pic" />);
  L.push(<img src="picture6.png" className="pic" />);
  L.push(<img src="picture7.png" className="pic" />);
  return L[props.mistakes];
};
const ToList1 = props => {
  var L = [];
  var L1 = props.stringLetters1.split('');
  L1.forEach(item => {
    L.push(
      <button className="letter" onClick="">
        {item}
      </button>
    );
  });
  return <div className="box">{L}</div>;
};
const ToList2 = props => {
  var L = [];
  var L2 = props.stringLetters2.split('');
  L2.forEach(item => {
    L.push(
      <button className="letter" onClick="">
        {item}
      </button>
    );
  });
  return <div className="box">{L}</div>;
};
const Word = props => {
  var L = [];
  var L2 = props.word1;
  var L1 = L2.split('');
  L1.forEach(item => {
    L.push(<div className="guess">{item}</div>);
  });
  return <div className="box">{L}</div>;
};
