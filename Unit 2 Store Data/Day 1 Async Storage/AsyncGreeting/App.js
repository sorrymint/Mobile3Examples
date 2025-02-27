import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";

export default function App() {
    const [catName, setCatName] = useState("");

    useEffect(() => {
        // Load cat name from AsyncStorage on component mount
        loadCatName();
    }, []);

    const saveCatName = async () => {
        try {
            // Save cat name to AsyncStorage
            await AsyncStorage.setItem("catName", catName);
            alert("Cat name saved!");
        } catch (error) {
            console.error("Error saving cat name:", error);
        }
    };

    const removeCatName = async () => {
        try {
            // Remove cat name from AsyncStorage
            await AsyncStorage.removeItem("catName");
            setCatName(""); // Clear catName state
            alert("Cat name removed!");
        } catch (error) {
            console.error("Error removing cat name:", error);
        }
    };

    const loadCatName = async () => {
        try {
            // Load cat name from AsyncStorage
            const savedCatName = await AsyncStorage.getItem("catName");
            if (savedCatName !== null) {
                setCatName(savedCatName);
            }
        } catch (error) {
            console.error("Error loading cat name:", error);
        }
    };

    return (
        <View style={styles.container}>
            <Image
                source={require("./assets/catBanner.png")}
                style={{ width: "100%" }}
                resizeMode="contain"
            />
            <Text>What's your cat's name?</Text>
            <TextInput
                value={catName}
                onChangeText={(text) => setCatName(text)}
                placeholder="Enter cat's name"
            />
            <Button title="Save my cat's name!" onPress={saveCatName} />
            <Button title="Remove my cat's name!" onPress={removeCatName} />
            <Text>
                {catName !== "" ? `Your cat's name is ${catName}!` : ""}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
