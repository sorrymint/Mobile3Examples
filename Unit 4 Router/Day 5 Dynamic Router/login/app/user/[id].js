import React, { useState, useEffect } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function UserPage() {

    //TODO update to touchable NOT Touchable Opaticty

    const router = useRouter();
    const { id } = useLocalSearchParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const users = require("../../assets/users.json");
        const userData = users.find((user) => user.id === id);
        setUser(userData);
    }, [id]);

    //don't forget this
    if (!user) {
        return <Text>Loading...</Text>;
    }

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: user.profileImage }}
                style={styles.profileImage}
            />
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.username}>@{user.username}</Text>
            <Text style={styles.bio}>{user.bio}</Text>
            <Text style={styles.location}>{user.location}</Text>
            <Text style={styles.website}>{user.website}</Text>
            <Text style={styles.stats}>
                {user.followers} followers | {user.following} following |{" "}
                {user.posts} posts | {user.likes} likes
            </Text>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => router.navigate("/")}
            >
                <Text style={styles.backButtonText}>Back</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
        borderWidth: 2,
        borderColor: "#000",
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#333",
    },
    username: {
        fontSize: 18,
        color: "gray",
        marginBottom: 10,
    },
    bio: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20,
        color: "#666",
    },
    location: {
        fontSize: 14,
        color: "gray",
        marginBottom: 10,
    },
    website: {
        fontSize: 14,
        color: "blue",
        textDecorationLine: "underline",
        marginBottom: 20,
    },
    stats: {
        fontSize: 14,
        color: "gray",
    },
    backButton: {
        backgroundColor: "#007bff",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 25,
        marginTop: 20,
    },
    backButtonText: {
        color: "#fff",
        fontSize: 16,
    },
});
