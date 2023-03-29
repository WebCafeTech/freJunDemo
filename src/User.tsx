import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type movie = {
    id:string;
    name:string;
}
export default function User() {
  
  return (
    <View style={styles.container}>
      <Text>
        {name}
      </Text>
    </View>
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
