import React, { useEffect, useState } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import Constants from "expo-constants";

const TravelPlanList = () => {
    const [travelPlans, setTravelPlans] = useState([]);

    useEffect(() => {
        const hostUri = Constants.expoConfig.hostUri;
        console.log(hostUri)
        // Parse the hostUri to extract the IP address
        // Look in console for logs
        // › Opening exp://172.17.3.82:8081 on Pixel_4a_API_34
        // This shows that the port is on the URL we want to remove it.
        const ipAddress = hostUri ? hostUri.split(":")[0] : null;
        
        // Hardcode the port number for your Spring API
        const apiPort = "8080";

        // Construct the API URL using the extracted IP address and hardcoded port
        const apiUrl = ipAddress
            ? `http://${ipAddress}:${apiPort}/travelPlans`
            : null;

        //use dynamic code to figure out ip
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setTravelPlans(data))
            .catch((error) => console.error(error));
    }, []);


    return (
        <View style={styles.container}>
            <FlatList
                data={travelPlans}
                keyExtractor={(item) => item.destination}
                renderItem={({ item }) => (
                    <Link style={styles.item} href={`/country/${item.id}`}>
                        <View>
                            <Text style={styles.title}>{item.tripName}</Text>
                            <Text style={styles.description}>{item.desc}</Text>
                            {item.thingsToSee.map((thing, index) => (
                                <View key={index} style={styles.innerItem}>
                                    <Text style={styles.innerTitle}>
                                        {thing.title}
                                    </Text>
                                    <Text style={styles.innerDescription}>
                                        {thing.desc}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </Link>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: "gray",
    },
    innerItem: {
        marginTop: 10,
    },
    innerTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    innerDescription: {
        fontSize: 12,
        color: "gray",
    },
});

export default TravelPlanList;
