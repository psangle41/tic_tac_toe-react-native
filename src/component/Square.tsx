import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

interface IProps {
  value: string;
  onSquareClick: () => void;
  disable: boolean;
}

const Square: React.FC<IProps> = props => {
  const {value, onSquareClick, disable} = props;
  return (
    <TouchableOpacity
      onPress={onSquareClick}
      style={styles.container}
      disabled={!!value || disable}>
      <Text style={styles.content}>{value}</Text>
    </TouchableOpacity>
  );
};

export default Square;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    aspectRatio: 1,
    borderRadius: 20,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    fontSize: 40,
  },
});
