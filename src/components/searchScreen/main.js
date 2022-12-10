import {Text, TextInput, View,FlatList} from 'react-native';
import styles from './searchStyle';
import React, { useState } from 'react';
import searchResults from '../../../assets/data/searchTown';
import Fontisto from 'react-native-vector-icons/Fontisto';

const DestinationSearchScreen = () => {

  const [textInput, setTextInput] = useState('')

  return (
    <View style={styles.container}>
      {/* TextInput */}
      <TextInput
        style={styles.textInput}
        placeholder="Search a destination"
        value={textInput}
        onChangeText={setTextInput}
      />
      {/* // list of destinations */}

      <FlatList
        data={searchResults}
        renderItem={({item}) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              {/* <Fontisto name={'location-pin'} size={35}  /> */}
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
