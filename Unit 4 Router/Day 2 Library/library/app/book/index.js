import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { useLocalSearchParams } from "expo-router";

const Book = () => {
    const { price, desc, image } = useLocalSearchParams();

    return (
        <View style={styles.bookContainer}>
            <Text style={styles.desc}>{desc}</Text>
            <Image
                source={image}
                style={styles.bookImage}
                resizeMode="contain"
            />
            <Text>Price: ${price}</Text>
            <Link href="/">Back!</Link>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        padding: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    desc: {
        fontSize: 20,
        marginBottom: 10,
    },
    bookContainer: {
        marginBottom: 20,
        backgroundColor: "#FFF",
        borderRadius: 10,
        padding: 10,
        elevation: 5,
    },
    bookImage: {
        width: "100%",
        height: undefined,
        aspectRatio: 1,
        resizeMode: "contain",
    },
});

export default Book;