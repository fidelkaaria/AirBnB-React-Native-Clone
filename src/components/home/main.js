import {View, Text, ImageBackground, Pressable} from 'react-native';
import React from 'react';
import styles from './homestyles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <><View>
      {/* //Search Bar */}
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('HomeResult')} />
      <Fontisto name="search" size={30} color="#f15454" />
      <Text style={styles.buttonText}> Where are you going</Text>
    </Pressable><ImageBackground
      style={styles.image}
      source={require('../../../assets/images/wallpaper.jpg')}>
        {/* title */}
        <Text style={styles.title}>Go Near</Text>
        {/* button */}
        <Pressable
          style={styles.buttonText}
          onPress={() => console.log('clicked')}>
          <Text style={styles.buttonText}> Explore Nearby places </Text>
        </Pressable>
      </ImageBackground></>
    </View>
  );
};

export default HomeScreen;
