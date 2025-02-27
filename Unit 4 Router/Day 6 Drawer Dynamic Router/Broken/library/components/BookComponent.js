import { View, Text, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";

const BookComponent = (props) => {
    return (
        <Link
            href={{
                pathname: "/book/[id]",
                params: {id: `${props.book.id}`, book: props.book}
            }}
            style={styles.bookContainer}
        >
            <View style={styles.row}>
                <Image
                    source={{ uri: props.book.image }}
                    style={styles.bookImage}
                />
                <View>
                    <Text style={styles.title}>{props.book.title}</Text>
                    <Text style={styles.author}>{props.book.author}</Text>
                </View>
            </View>
            <Text style={styles.description}>{props.book.description}</Text>
        </Link>
    );
};

const styles = StyleSheet.create({
    bookContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        backgroundColor: "#f8f8f8",
        marginBottom: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    row: {
        flexDirection: "row",
    },
    bookImage: {
        width: "50%",
        resizeMode: "contain",
        height: 200,
        borderRadius: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 10,
    },
    author: {
        fontSize: 16,
        marginTop: 5,
    },
    description: {
        fontSize: 14,
        marginTop: 5,
    },
});

export default BookComponent;
