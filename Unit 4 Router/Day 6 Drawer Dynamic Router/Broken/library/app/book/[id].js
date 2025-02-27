import { View, Text, Image, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";



const BookDetails = () => {
    
    const params = useLocalSearchParams();
    const {id} = params;
    //TODO find book with id again

    return (
        <View style={styles.bookContainer}>
            <View style={styles.row}>
                <Image
                    source={{ uri: book.image }}
                    style={styles.bookImage}
                />
                <View>
                    <Text style={styles.title}>{book.title}</Text>
                    <Text style={styles.author}>{book.author}</Text>
                </View>
            </View>
            <Text style={styles.description}>{book.description}</Text>
        </View>
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

export default BookDetails;
