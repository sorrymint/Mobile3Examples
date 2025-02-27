import React, { useState, useEffect } from "react";

import { View, Text, Image, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

const AuthorSearch = () => {

    const {name} = useLocalSearchParams();
    const [book, setBook] = useState(null);

    //TODO this never finds the book IDK
    useEffect(() => {
        console.log(name)
        // const books = require("../../assets/books.json");
        // // THIS IS NOT WORKING ITS ALWAYS NULL
        // const bookData = books.find((item) => item.author === name);
        // console.log(bookData);
        // setBook(bookData);
    }, [name]);

    if (!name) {
        return <Text>Loading...</Text>;
    }

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

export default AuthorSearch;
