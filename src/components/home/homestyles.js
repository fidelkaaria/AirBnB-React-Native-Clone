import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 100,
    fontWeight: 'bold',
    color: 'lightgreen',
    width: '90%',
    marginLeft: 25,
  },
  button: {
    backgroundColor: 'white',
    width: '100%',
    marginLeft: 25,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  searchbutton: {
    backgroundColor: 'white',
    color: 'black',
    marginHorizontal: 20,
    width: Dimensions.get('screen').width - 50,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems : 'center',
    position: 'absolute',
    top: 30,
    zIndex: 100,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default styles;
