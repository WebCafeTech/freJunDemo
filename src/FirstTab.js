import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

// export default function App() {
//   const name = 'Home'
//   return (
//     <View style={styles.container}>
//       <Text>khushbu</Text>
//     </View>
//   );
// }

export default function FirstTab() {
  
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name = "First" component={FirstTab} />
//       <Tab.Screen name = "Second" component={SecondTab} />
//     </Tab.Navigator>
//   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
