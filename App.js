import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FirstTab from './src/FirstTab';
import SecondTab from './src/SecondTab';
import { NavigationContainer } from '@react-navigation/native';
import { Fontisto, Octicons } from '@expo/vector-icons'
import { Provider } from 'react-redux';
import store from './src/redux/store';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <Provider store={store} >
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="First"
            component={FirstTab}
            options={{
              tabBarIcon: ({ focused, color, size }) => {
                return (<Fontisto name="list-1" size={24} color="black" />)
              }
            }} />
          <Tab.Screen
            name="Second"
            component={SecondTab}
            options={{
              tabBarIcon: ({ focused, color, size }) => {
                return (<Octicons name="tasklist" size={24} color="black" />)
              }
            }}
          />


        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
