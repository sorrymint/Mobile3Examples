import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
} from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#25292e" />
            <Text style={styles.title}>Settings</Text>
            <TouchableOpacity onPress={() => router.push("/")}>
                <Text style={styles.settingsText}>Home</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    listContainer: {
        marginBottom: 20,
    },
    listItem: {
        color: "#fff",
        fontSize: 18,
        marginBottom: 10,
    },
    button: {
        backgroundColor: "#FFA726",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginVertical: 10,
    },
    buttonText: {
        color: "#000",
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "center",
    },
    settingsText: {
        color: "#FFA726",
        fontSize: 18,
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: 20,
    },
});
