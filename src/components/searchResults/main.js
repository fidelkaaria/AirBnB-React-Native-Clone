import {Text, View, FlatList} from 'react-native';
import React from 'react';
import Post from '../post/main';
import feed from '../../../assets/data/data';

const SearchResultScreen = () => {
  return (
    <View>
      <FlatList data={feed} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
};

export default SearchResultScreen;
