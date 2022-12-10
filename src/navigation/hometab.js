import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../components/searchResults/main';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';



const Tab = createBottomTabNavigator();

const HomeTabScreen = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={'HomeResult'}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => <Fontisto name="search" size={25} />,
        }}
      />
      <Tab.Screen
        name={'Luxury Destination'}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Luxury Destination',
          tabBarIcon: ({color, size}) => (
            <EvilIcons name="user" size={40} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Explore'}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="heart-o" size={40} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Like'}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Like',
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="airbnb" size={40} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={'Destinations'}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Destinations',
          tabBarIcon: ({color, size}) => (
            <Feather name="message-square" size={40} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabScreen;
