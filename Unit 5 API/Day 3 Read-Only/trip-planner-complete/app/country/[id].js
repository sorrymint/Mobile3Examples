import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import { useLocalSearchParams, Link } from "expo-router";
import Constants from "expo-constants";

export default function CountryScreen() {
    const { id } = useLocalSearchParams();
    const [trip, setTrip] = useState(null);

    useEffect(() => {
        const hostUri = Constants.expoConfig.hostUri;
        const ipAddress = hostUri ? hostUri.split(":")[0] : null;
        const apiPort = "8080";
        const tempURL = ipAddress ? `http://${ipAddress}:${apiPort}` : null;
        fetch(`${tempURL}/travelPlans/${id}`)
            .then((response) => response.json())
            .then((data) => setTrip(data));
    }, [id]);

    return (
        <View style={styles.container}>
            {trip && (
                <>
                    <View style={styles.container}>
                        {trip.thingsToSee.map((thing, index) => (
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
                </>
            )}
            <Link href="/">Return</Link>
        </View>
    );
}

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
