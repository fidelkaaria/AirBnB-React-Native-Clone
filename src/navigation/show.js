import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DestinationSearchScreen from '../components/searchScreen/main';
import GuestScreen from '../components/guest/main'
import HomeResult from '../navigation/hometab'

const Stack = createNativeStackNavigator();

import React from 'react';

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeResult}
          options={{headerShown : false}}
        />

        <Stack.Screen
          name={'Search Destination'}
          component={DestinationSearchScreen}
          options={{title: 'Search your Destination'}}
        />

        <Stack.Screen
          name={'Guest'}
          component={GuestScreen}
          options={{title: 'How may guests are there'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
