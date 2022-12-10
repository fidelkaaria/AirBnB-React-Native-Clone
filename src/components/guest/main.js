import {View, Text, Pressable} from 'react-native';
import styles from './guestStyle';

import React from 'react';
import {useState} from 'react';

const GuestScreen = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  return (
    <View>
      {/* row 1 adults */}
      <View style={styles.row}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Adults</Text>
          <Text style={{color: 'lightgrey'}}>Above age 18 years</Text>
        </View>

        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          {/* Buttons     */}
          {/* + buttons */}
          <Pressable
            style={styles.button}
            onPress={() => Math.max(0, setAdults(adults - 1))}>
            <Text>-</Text>
          </Pressable>
          {/* value */}
          <Text style={{marginHorizontal: 20, fontSize: 18}}>{adults}</Text>
          {/* -button */}
          <Pressable
            style={styles.button}
            onPress={() => setAdults(adults + 1)}>
            <Text>+</Text>
          </Pressable>
        </View>
      </View>
      {/* row 1 adults */}
      <View style={styles.row}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Children</Text>
          <Text style={{color: 'lightgrey'}}>Below 18 years</Text>
        </View>

        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          {/* Buttons     */}
          {/* + buttons */}
          <Pressable
            style={styles.button}
            onPress={() => setChildren(children - 1)}>
            <Text>-</Text>
          </Pressable>
          {/* value */}
          <Text style={{marginHorizontal: 20, fontSize: 18}}>{children}</Text>
          {/* -button */}
          <Pressable
            style={styles.button}
            onPress={() => setChildren(children + 1)}>
            <Text>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.row}>
        <View>
          <Text style={{fontWeight: 'bold'}}>Infants</Text>
          <Text style={{color: 'lightgrey'}}>Below 6 years</Text>
        </View>

        <View style={{alignItems: 'center', flexDirection: 'row'}}>
          {/* Buttons     */}
          {/* + buttons */}
          <Pressable
            style={styles.button}
            onPress={() => Math.max(0, setInfants(infants - 1))}>
            <Text>-</Text>
          </Pressable>
          {/* value */}
          <Text style={{marginHorizontal: 20, fontSize: 18}}>{infants}</Text>
          {/* -button */}
          <Pressable
            style={styles.button}
            onPress={() => setInfants(infants + 1)}>
            <Text>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default GuestScreen;
