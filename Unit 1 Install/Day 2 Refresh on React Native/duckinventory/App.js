import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import DuckItem from './components/DuckItem.js'
import duckData from './assets/ducks.js';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style={{backgroundColor: "#ffd43a"}}/>
      <Text style={styles.title}>IHCC Ducks</Text>
      <FlatList
        data={duckData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DuckItem duck={item} />}
      />
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
  title:{
    fontSize: 30, 
    padding: 10,
    marginBottom: 10,
    paddingTop: 40,
    backgroundColor: '#ffd43a',
    width: '100%',
    textAlign: 'center',
  }
});
