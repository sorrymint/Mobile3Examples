import React, { useState } from "react";
import { Button, View, Image, Text } from "react-native";

export default function App() {
    const [catUrl, setCatUrl] = useState("");

    const fetchRandomCat = async () => {
        try {
            const response = await fetch(
                "https://api.thecatapi.com/v1/images/search"
            );
            const json = await response.json();
            setCatUrl(json[0].url);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <Text>Cat API</Text>
            {
                //catUrl is so its not null on start
                catUrl && (
                    <Image
                        source={{ uri: catUrl }}
                        // you must set the style so it is displayed 
                        style={{ width: 200, height: 200 }}
                    />
                )
            }
            <Button title="Fetch Random Cat" onPress={fetchRandomCat} />
        </View>
    );
}
