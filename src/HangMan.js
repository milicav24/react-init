import React, { Component } from 'react';
import Picture from './Picture';
import Word from './Word';
import ToList from './ToList';

export default class HangMan extends Component {
  constructor(props) {
    super(props);
    this.words = ['TOMATO', 'PALATALIZACIJA'];
    this.state = {
      stringLetters: ['ABCDEFGHIJKLM', 'NOPQRSTUVWXYZ'],
      pressedLetters: [],
      matchedLetters: [],
      word: this.words[0],
      mistakes: 0,
      gameOver: false,
      gameWon: false
    };
  }

  render() {
    const {
      state: {
        mistakes,
        word,
        stringLetters,
        pressedLetters,
        matchedLetters,
        gameOver
      },
      onButtonPress,
      resetGame
    } = this;
    console.log('pressedLetters', pressedLetters);
    console.log('mistakes', mistakes);
    console.log('gameOver', gameOver);
    console.log('-----------------------------');
    return (
      <div>
        <Picture mistakes={mistakes} />
        <Word word={word} matchedLetters={matchedLetters} />
        <div className="boxx">
          {stringLetters.map((item, key) => (
            <ToList
              key={key}
              pressedLetters={pressedLetters}
              stringLetters={item}
              onButtonPress={onButtonPress}
              gameOver={gameOver}
            />
          ))}
        </div>
        {gameOver ? <button onClick={resetGame}>Try again</button> : null}
      </div>
    );
  }

  onButtonPress = item => {
    const {
      state: { pressedLetters, matchedLetters, word, mistakes },
      props: { changeHangman }
    } = this;
    let result = { pressedLetters: [...pressedLetters, item] };
    if (word.indexOf(item) !== -1) {
      result.matchedLetters = [...matchedLetters, item];
    } else {
      result.mistakes = mistakes + 1;
      if (result.mistakes > 5) {
        result.gameOver = true;
        changeHangman('Game Over');
      }
    }
    this.setState(result);
    console.log('button has been pressed', item);
  };

  resetGame = () => {
    this.setState({
      pressedLetters: [],
      matchedLetters: [],
      word: this.words[1],
      mistakes: 0,
      gameOver: false,
      gameWon: false
    });
    this.props.changeHangman('Hang Man');
  };
}
