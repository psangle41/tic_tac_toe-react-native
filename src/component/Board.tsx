import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Square from './Square';
import {calculateWinner} from '../utils.ts/boardUtil';

function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState<string[]>(Array(9).fill(''));

  const winner = calculateWinner(squares);

  const handleClick = (index: number) => {
    if (winner) {
      return;
    }
    const squareCopy = [...squares];
    if (xIsNext) {
      squareCopy[index] = 'X';
    } else {
      squareCopy[index] = 'O';
    }
    setSquares(squareCopy);
    setXIsNext(prev => !prev);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(''));
    setXIsNext(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tic - Tac - Toe</Text>
      {winner ? (
        <Text style={styles.subTitle}>{`🎉 Winner is : ${winner}`}</Text>
      ) : (
        <Text style={styles.subTitle}>{`Next Player : ${
          xIsNext ? 'X' : 'O'
        }`}</Text>
      )}
      <View style={styles.boardWrapper}>
        <View style={styles.boardRow}>
          <Square
            value={squares[0]}
            onSquareClick={() => handleClick(0)}
            disable={!!winner}
          />
          <Square
            value={squares[1]}
            onSquareClick={() => handleClick(1)}
            disable={!!winner}
          />
          <Square
            value={squares[2]}
            onSquareClick={() => handleClick(2)}
            disable={!!winner}
          />
        </View>

        <View style={styles.boardRow}>
          <Square
            value={squares[3]}
            onSquareClick={() => handleClick(3)}
            disable={!!winner}
          />
          <Square
            value={squares[4]}
            onSquareClick={() => handleClick(4)}
            disable={!!winner}
          />
          <Square
            value={squares[5]}
            onSquareClick={() => handleClick(5)}
            disable={!!winner}
          />
        </View>

        <View style={styles.boardRow}>
          <Square
            value={squares[6]}
            onSquareClick={() => handleClick(6)}
            disable={!!winner}
          />
          <Square
            value={squares[7]}
            onSquareClick={() => handleClick(7)}
            disable={!!winner}
          />
          <Square
            value={squares[8]}
            onSquareClick={() => handleClick(8)}
            disable={!!winner}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.btn}
        onPress={resetGame}
        disabled={squares.every(square => !square)}>
        <Text style={styles.btnText}>{winner ? 'Play Again' : 'Reset'}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Board;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFBF34',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#000',
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 26,
    marginBottom: 30,
  },
  subTitle: {
    color: '#000',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 24,
    marginBottom: 30,
  },
  boardWrapper: {
    width: '100%',
    aspectRatio: 1,
    paddingHorizontal: 2.5,
  },
  boardRow: {
    flexDirection: 'row',
  },
  btn: {
    marginTop: 25,
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingHorizontal: 45,
    paddingVertical: 15,
  },
  btnText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
  },
});
