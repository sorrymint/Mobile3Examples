import React from 'react';
import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Bennett Spring State Park</Text>
      <Text>Location: Lebanon, MO</Text>
      <Text>Activities: Fishing, Camping, Hiking, Dining, Interpretive Programs</Text>
      <Text>Park Hours: Check the official website for specific dates and times.</Text>
      <Text>Contact: Park Office: 417-532-4338, Lodging/Store: 417-532-4307, Dining: 417-532-4547, Nature Center: 417-532-3925</Text>
      <Link href="/fish">Fishing Info</Link>
    </View>
  );
}
