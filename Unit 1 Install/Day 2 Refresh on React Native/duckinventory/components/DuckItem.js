import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const DuckItem = ({ duck }) => {

  return (
    <View style={styles.duckContainer}>
      <Image style={styles.duckImage} source={duck.Image} />
      <Text style={styles.duckName}>{duck.Name}</Text>
      <Text style={styles.duckDesc}>{duck.Desc}</Text>
      <Text style={styles.duckPrice}>${duck.price.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  duckContainer: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
  },
  duckImage: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    borderRadius: 5,
  },
  duckName: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  duckDesc: {
    marginTop: 5,
    marginBottom: 10,
  },
  duckPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
  },
});

export default DuckItem;
