import React from "react";
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Image,
    FlatList,
} from "react-native";
import { Link } from "expo-router";
import fishData from "../../../assets/fish.json";
import { collectManifestSchemes } from "expo-linking";

const FishPage = () => {
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{fishData.title}</Text>
            <Text style={styles.heading}>{fishData.heading}</Text>
            <Text style={styles.desc}>{fishData.desc}</Text>
            <Link href="/fish">Back</Link>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    heading: {
        fontSize: 18,
        marginBottom: 10,
    },
    desc: {
        //to only show one line
        numberOfLines: 1,
        overflow: "hidden",
        fontSize: 16,
        marginBottom: 20,
    },
    image: {
        width: "100%",
        height: 200,
        resizeMode: "cover",
        marginBottom: 20,
        borderRadius: 10,
    },
    card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        elevation: 3,
    },
    cardHeading: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    zoneText: {
        fontSize: 16,
        marginBottom: 8,
    },
    hoursContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 8,
    },
    month: {
        fontSize: 16,
        fontWeight: "bold",
    },
    hourText: {
        fontSize: 16,
    },
    ruleText: {
        fontSize: 16,
        marginBottom: 8,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
});

export default FishPage;
