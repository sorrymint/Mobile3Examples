import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import Constants from "expo-constants";


const QuizScreen = () => {
  const [quizData, setQuizData] = useState([]);
  const [apiUrl, setApiUrl] = useState("");

  useEffect(() => {
    const hostUri = Constants.expoConfig.hostUri;
    console.log(hostUri)
    // Parse the hostUri to extract the IP address
    // Look in console for logs
    // › Opening exp://172.17.3.82:8081 on Pixel_4a_API_34
    // This shows that the port is on the URL we want to remove it.
    const ipAddress = hostUri.split(":")[0];

    // Hardcode the port number for your Spring API
    const apiPort = "8080";

    // Construct the API URL using the extracted IP address and hardcoded port
    const localApiUrl = `http://${ipAddress}:${apiPort}`;
    setApiUrl(localApiUrl);
    fetch(`${localApiUrl}/quiz/start`)
        .then(response => response.json())
        .then(data => setQuizData(data))
        .catch(error => console.error('Error fetching quiz data:', error));
  }, []);

  const answerQuestion = (item) => {
    //TODO call api
    console.log(item);
  }

  const renderItem = ({ item }) => (
      <View style={styles.itemContainer}>
        <Text style={styles.question}>{item.description}</Text>
        <View style={styles.optionContainer}>
          {item.options.map((option, index) => (
              <View style={styles.option}>
                <Button  title={`${index} + 1` + option} onPress={() => answerQuestion(index, item)} />
              </View>
          ))}
        </View>
      </View>
  );

  return (
      <View style={styles.container}>
        <Text style={styles.title}>Quiz Time!</Text>
        <FlatList
            data={quizData}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  optionContainer: {
    flexDirection: 'column',
  },
  option: {
    margin: 5,
  },
});

export default QuizScreen;
