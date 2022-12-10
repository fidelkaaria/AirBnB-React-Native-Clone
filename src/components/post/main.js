import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './poststyle.js';

const PostScreen = (props) => {
  const post = props.post;
  return (
    <View style={styles.container}>
      {/* Main */}

      {/* image */}
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />

      {/* Bed & Bedroom */}

      <Text style={styles.bedroom}>
        {post.bed} bed {post.bedroom} bedrooms
      </Text>

      {/* Type & Description */}

      <Text style={styles.description}>
        {post.type} : {post.title}
      </Text>
      {/* old price & new Price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrices}>{post.oldPrice}</Text>
        <Text style={styles.newPrices}> {post.newPrice} </Text>
        /again
      </Text>

      {/* Total Price  */}
      <Text style={styles.totalPrices}>{post.totalPrice}</Text>
    </View>
  );
};

export default PostScreen;
