import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: '100%',

    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },

  bedroom: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  prices: {
    fontSize: 18,
  },
  oldPrices: {
    color: '#5b5b5b',
    textDecorationLine: 'line-through',
  },
  newPrices: {
    fontWeight: 'bold',
  },
  totalPrices: {
    color: '5b5b5b',
    textDecorationLine: 'underline',
    fontSize : 18
  },
});

export default styles;
