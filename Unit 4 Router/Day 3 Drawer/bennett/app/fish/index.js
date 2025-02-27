import React from "react";
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Image,
} from "react-native";
import { Link } from "expo-router";
import fishData from "../../assets/fish.json";

const FishPage = () => {
    const truncateText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength - 3) + " ...click to see more";
        }
        return text;
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{fishData.title}</Text>
            <Text style={styles.heading}>{fishData.heading}</Text>
            <Link href="/fish/desc">
                <Text style={styles.desc}>
                    {truncateText(fishData.desc, 70)}
                </Text>
            </Link>

            <Image
                style={styles.image}
                source={require("../../assets/Bennett fisherman.jpg")}
            />

            <View style={styles.card}>
                <Text style={styles.cardHeading}>
                    {fishData.regulations.heading}
                </Text>
                {fishData.regulations.zones.map((zone, index) => (
                    <Text key={index} style={styles.zoneText}>
                        {zone}
                    </Text>
                ))}
            </View>

            <View style={styles.card}>
                <Text style={styles.cardHeading}>Fishing Hours</Text>
                <View style={styles.row}>
                    <Text style={styles.cardHeading}>Beginning</Text>
                    <Text style={styles.cardHeading}>Ending</Text>
                </View>
                {fishData.fishing_hours.map((item) => (
                    <View style={styles.hoursContainer}>
                        <Text style={styles.month}>{item.month}</Text>
                        <Text style={styles.hourText}>
                            {item.beginning} - {item.ending}
                        </Text>
                    </View>
                ))}
            </View>

            <View style={styles.card}>
                <Text style={styles.cardHeading}>Rules</Text>
                {fishData.rules.map((rule, index) => (
                    <Text key={index} style={styles.ruleText}>
                        {"\u2022"} {rule}
                    </Text>
                ))}
            </View>
        </ScrollView>
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
