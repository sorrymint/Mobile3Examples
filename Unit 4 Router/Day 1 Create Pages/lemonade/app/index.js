import React from "react";
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
} from "react-native";
import { useRouter } from "expo-router";

export default function App() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <StatusBar />
            <Text style={styles.title}>Add to Sell Lemonade</Text>
            <Image
                style={styles.image}
                source={{
                    uri: "https://media.gettyimages.com/id/525386575/photo/portrait-of-girl-on-lemonade-stand-holding-up-one-hundred-euro-note.webp?s=1024x1024&w=gi&k=20&c=5h-26IwGRehAOZ6ds6wxHcH7OT4U7LwpSGpK7x0WyzU=",
                }}
            />
            <View style={styles.listContainer}>
                <Text style={styles.listItem}>Refreshing</Text>
                <Text style={styles.listItem}>Natural</Text>
                <Text style={styles.listItem}>Healthy</Text>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => console.log("Button pressed")}
            >
                <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("/settings")}>
                <Text style={styles.settingsText}>Settings</Text>
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
